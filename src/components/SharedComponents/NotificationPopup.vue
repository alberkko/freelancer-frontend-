<template>
  <div v-if="Object.keys(selectedUserMessaging).length !== 0">
    <div v-for="user in Object.keys(selectedUserMessaging)" :key="user">
      <div class="fixed bottom-0 right-0 m-10 z-50 bg-white shadow-lg rounded-lg">
        <div class="relative w-full p-6 flex items-start justify-between">
          <div class="absolute right-0 top-0 m-4" @click="closeWithUser(user)">
            <span class="iconify h-6 w-6" data-icon="ion:close" data-inline="false"></span>
          </div>

          <div class="mr-4">
            <img
              v-if="selectedUserMessaging[user].profile.base64ProfilePhoto"
              class="inline-block h-16 w-16 rounded-full object-cover"
              v-bind:src="selectedUserMessaging[user].profile.base64ProfilePhoto"
              alt
            />
            <img
              v-else
              class="inline-block h-16 w-16 rounded-full object-cover"
              src="https://i.stack.imgur.com/l60Hf.png"
              alt
            />
            <div class="flex items-center mt-1 cursor-pointer"></div>
          </div>
          <div class="flex-1 flex flex-col" @click="goToUserMessage(user)">
            <div class="flex items-center space-x-3">
              <h3
                class="text-gray-900 cursor-pointer text-md font-bold"
              >{{selectedUserMessaging[user].profile.firstName + " " + selectedUserMessaging[user].profile.lastName}}</h3>
            </div>
            <div
              class="flex-shrink-0 inline-block text-xs leading-4 font-medium mb-1"
            >@{{selectedUserMessaging[user].message.sender}}</div>
            <div
              class="w-64 mt-1 text-gray-500 text-sm leading-5 truncate"
            >{{selectedUserMessaging[user].message.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { UserNameProvider } from "../../provider/storage/username.storage";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userName: UserNameProvider.getUserName(),
      selectedUserMessaging: {},
      popupKey: 10,
    };
  },
  mounted() {
    this.connect();
  },
  methods: {
    ...mapActions("profile", ["moduleGetUserProfileByUserName"]),
    goToUserMessage(user) {
      this.selectedUserMessaging = {};
      this.$router.push("/messages/" + user);
    },
    closeWithUser(user) {
      if (Object.keys(this.selectedUserMessaging).includes(user)) {
        delete this.selectedUserMessaging[user];
        this.$forceUpdate();
      }
    },
    connect() {
      this.socket = new SockJS(process.env.VUE_APP_BACKEND_URL + "/freelancer");
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect(
        {},
        () => {
          this.connected = true;
          this.stompClient.subscribe("/topic/user/" + this.userName, (tick) => {
            var message = JSON.parse(tick.body);
            this.moduleGetUserProfileByUserName({
              username: message.sender,
            }).then((data) => {
              this.selectedUserMessaging[message.sender] = {
                message,
                profile: data.data,
              };
              this.$forceUpdate();
            });
          });
        },
        (error) => {
          console.log(error);
          this.connected = false;
        }
      );
    },
  },
};
</script>

<style></style>
