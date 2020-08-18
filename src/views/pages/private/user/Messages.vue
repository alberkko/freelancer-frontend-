<template>
  <div>
    <div class="relative h-200 overflow-hidden">
      <div
        class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:items-end lg:justify-between justify-center max-w-screen-sxl mx-auto lg:px-8 px-6 pb-20 h-full"
      >
        <div class="z-30 text-white text-3xl font-bold sm:text-4xl">Chat</div>
      </div>
      <div class="cover-overlay bg-opacity-25 z-20 absolute inset-0"></div>
      <img
        class="object-cover w-full h-full absolute top-0 z-10"
        src="@/assets/banner-default.png"
        alt
      />

      <!-- <div class="bg-black object-cover w-full h-full absolute top-0 z-10"></div> -->
    </div>

    <div
      class="max-w-screen-sxl mx-auto p-2 sm:p-6 lg:p-8 relative z-30 -top-80 rounded-lg"
    >
      <div class="w-full overflow-hidden rounded-lg shadow-xl">
        <!-- component -->
        <div
          class="messagges-wrapper relative flex w-full overflow-hidden antialiased bg-gray-200"
        >
          <!-- left -->
          <div
            class="relative flex hidden flex-col h-full bg-white border-r border-gray-300 shadow-xl md:block transform transition-all duration-500 ease-in-out"
            style="width: 24rem"
          >
            <div
              class="relative mt-2 mb-4 overflow-x-hidden overflow-y-auto scrolling-touch lg:max-h-sm scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray"
            >
              <ul
                class="flex flex-col inline-block w-full h-screen px-2 select-none"
              >
                <li
                  v-for="user in Object.keys(selectedUserMessaging)"
                  :key="selectedUserMessaging[user].id"
                  class="flex flex-no-wrap items-center pr-3 text-black rounded-full cursor-pointer py-65 hover:bg-gray-200"
                  style="padding-top: 0.65rem; padding-bottom: 0.65rem"
                >
                  <a :href="'/messages/' + user" class="w-full">
                    <div class="flex justify-between w-full focus:outline-none">
                      <div class="flex w-full">
                        <div
                          class="relative flex items-center justify-center w-15 h-12 ml-2 mr-3 text-xl font-semibold text-white bg-blue-800 rounded-full flex-no-shrink"
                        >
                          {{ user.charAt(0).toUpperCase() }}
                        </div>
                        <div class="w-full">
                          <div class="flex justify-between mb-1">
                            <h2 class="text-sm font-semibold text-black">
                              {{ user }}
                            </h2>
                            <div class="flex">
                              <span
                                class="ml-1 text-xs font-medium text-gray-600"
                                >{{
                                  selectedUserMessaging[user].recordCreated
                                    | moment("from", "now")
                                }}</span
                              >
                            </div>
                          </div>
                          <div
                            class="flex text-sm leading-none truncate text-content"
                          >
                            <span>{{
                              selectedUserMessaging[user].content
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="fixed absolute bottom-0 right-0 z-40 mb-6 mr-4">
              <button
                class="flex items-center justify-center w-12 h-12 mr-3 text-xl font-semibold text-white bg-blue-800 rounded-full focus:outline-none flex-no-shrink"
              >
                <svg
                  class="w-6 h-6 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="nonzero"
                    d="M3,17.46 L3,20.5 C3,20.78 3.22,21 3.5,21 L6.54,21 C6.67,21 6.8,20.95 6.89,20.85 L17.4562847,10.2933914 C17.6300744,10.1200486 17.6494989,9.85064903 17.514594,9.65572084 L17.4564466,9.58644661 L17.4564466,9.58644661 L14.4135534,6.54355339 C14.2182912,6.34829124 13.9017088,6.34829124 13.7064466,6.54355339 L3.15,17.1 C3.05,17.2 3,17.32 3,17.46 Z M20.71,7.04 C21.1,6.65 21.1,6.02 20.71,5.63 L18.37,3.29 C17.98,2.9 17.35,2.9 16.96,3.29 L15.4835534,4.76644661 C15.2882912,4.96170876 15.2882912,5.27829124 15.4835534,5.47355339 L18.5264466,8.51644661 C18.7217088,8.71170876 19.0382912,8.71170876 19.2335534,8.51644661 L20.71,7.04 Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- center -->
          <div class="relative flex flex-col flex-1">
            <div
              class="flex flex-grow-0 flex-shrink-0 w-full pr-3 bg-white border-b"
            >
              <div
                class="w-12 h-12 mx-4 my-2 bg-blue-800 bg-center bg-no-repeat bg-cover rounded-full cursor-pointer"
                src="background-image: url(https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=50)"
              ></div>
              <div
                class="flex flex-col justify-center flex-1 overflow-hidden cursor-pointer"
              >
                <div
                  class="overflow-hidden text-base font-medium leading-tight text-gray-600 whitespace-no-wrap"
                >
                  {{ messageReciver }}
                </div>
              </div>

              <button
                class="p-2 text-gray-700 flex self-center rounded-full md:hidden focus:outline-none hover:text-gray-600 hover:bg-gray-200"
              >
                <svg
                  class="w-6 h-6 text-gray-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="nonzero"
                    d="M4,16 L20,16 C20.5522847,16 21,16.4477153 21,17 C21,17.5128358 20.6139598,17.9355072 20.1166211,17.9932723 L20,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4871642 3.38604019,16.0644928 3.88337887,16.0067277 L4,16 L20,16 L4,16 Z M4,11 L20,11 C20.5522847,11 21,11.4477153 21,12 C21,12.5128358 20.6139598,12.9355072 20.1166211,12.9932723 L20,13 L4,13 C3.44771525,13 3,12.5522847 3,12 C3,11.4871642 3.38604019,11.0644928 3.88337887,11.0067277 L4,11 Z M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 C21,7.51283584 20.6139598,7.93550716 20.1166211,7.99327227 L20,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.48716416 3.38604019,6.06449284 3.88337887,6.00672773 L4,6 Z"
                  />
                </svg>
              </button>
            </div>
            <div
              class="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover"
            >
              <div
                class="self-center flex-1 w-full overflow-y-auto overflow-x-hidden"
                id="scrolldiv"
              >
                <div class="relative flex flex-col px-3 py-1 m-auto">
                  <ul id="example-1">
                    <li
                      class="flex flex-col"
                      v-for="item in messages"
                      :key="item"
                    >
                      <div
                        class="flex justify-end"
                        v-if="item.sender == userName"
                      >
                        <div class="w-7/12 my-2">
                          <div
                            class="p-4 text-sm bg-white rounded-t-lg rounded-l-lg shadow flex break-all"
                          >
                            <div>{{ item.content }}</div>
                          </div>
                        </div>
                      </div>

                      <div v-else>
                        <div class="self-end w-7/12 my-2">
                          <div
                            class="p-4 text-sm bg-white rounded-t-lg rounded-r-lg shadow break-all"
                          >
                            {{ item.content }}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="relative bg-white flex items-center self-center w-full p-4 overflow-hidden text-gray-600d"
              >
                <div
                  id="messageForm"
                  name="messageForm"
                  nameForm="messageForm"
                  class="w-full"
                >
                  <div class="form-group">
                    <div class="input-group clearfix flex justify-between">
                      <input
                        type="text"
                        id="send-message"
                        placeholder="Type a message..."
                        autocomplete="off"
                        v-model="content"
                        class="form-control w-full py-2 px-2 text-sm border rounded-md"
                      />
                      <button
                        type="button"
                        @click="send()"
                        class="border rounded-md px-5 ml-5"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VueMoment />
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import { UserNameProvider } from "../../../../provider/storage/username.storage";
import { mapActions } from "vuex";
import VueMoment from "vue-moment";
export default {
  name: "websocketdemo",
  data() {
    return {
      selectedUserMessaging: {},
      messages: [],
      messageReciver: this.$route.params.username,
      ReciverProfilePhoto: this.$route.params.base64ProfilePhoto,
      content: "",
      connected: false,
      userName: UserNameProvider.getUserName(),
      userSelected: {
        base64CoverPhoto: "",
        base64ProfilePhoto: "",
        email: "",
        experience: [],
        firstName: "",
        gender: "",
        languages: [],
        lastName: "",
        longSelfDescription: "",
        phoneNumber: "",
        shortSelfDescription: "",
        skillsModel: [],
        state: "",
        userName: "",
        webUrl: "",
      },
    };
  },
  components: {
    VueMoment,
  },
  methods: {
    ...mapActions("chat", [
      "moduleAddMessage",
      "moduleAllUserThatIChated",
      "moduleAllMessagesWithUser",
    ]),
    ...mapActions("profile", ["moduleGetUserProfileByUserName"]),
    updateScroll() {
      var element = document.getElementById("scrolldiv");
      element.scrollTop = element.scrollHeight;
    },
    send() {
      if (
        this.stompClient &&
        this.stompClient.connected &&
        this.content != ""
      ) {
        const chatModel = {
          sender: this.userName,
          content: this.content,
          receiver: this.messageReciver,
          type: "CHAT",
        };

        this.messages.push(chatModel);

        this.moduleAddMessage({ chatModel });

        this.selectedUserMessaging[this.messageReciver] = {
          content: chatModel.content,
          recordCreated: new Date(),
        };

        let self = this;

        this.content = "";
        setTimeout(function() {
          self.updateScroll();
        }, 300);
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
            if (this.messageReciver === message.sender) {
              this.messages.push(message);
            }

            this.selectedUserMessaging[message.sender] = {
              content: message.content,
              recordCreated: new Date(),
            };
          });
        },
        (error) => {
          console.log(error);
          this.connected = false;
        }
      );
    },
    disconnect() {
      if (this.stompClient) {
        this.stompClient.disconnect();
      }
      this.connected = false;
    },
    tickleConnection() {
      this.connected ? this.disconnect() : this.connect();
    },
    selectUser(user) {
      this.$router.push("/messages/" + user);
    },
  },
  mounted() {
    document
      .getElementById("send-message")
      .addEventListener("keydown", ({ key }) => {
        if (key === "Enter") {
          this.send();
        }
      });

    // element.focus()
    this.connect();
    this.moduleAllUserThatIChated().then((data) => {
      this.selectedUserMessaging = data.data;
    });

    var pageUserMessages = {
      userName: this.messageReciver,
      page: { from: 0, to: 25 },
    };

    this.moduleAllMessagesWithUser({ pageUserMessages }).then((data) => {
      this.messages = data.data;
    });

    this.moduleGetUserProfileByUserName({ username: this.messageReciver }).then(
      (data) => {
        this.userSelected = data.data;
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.messagges-wrapper {
  height: calc(100vh - 300px);
}

.text-content {
  width: 270px;
}
</style>
