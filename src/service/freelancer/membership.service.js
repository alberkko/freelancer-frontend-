import ApiService from "../api.service";

const MembershipService = {

    async addEmployerMembership(employerMembershipModel) {
        const requestData = {
            method: 'POST',
            url: "/membership/add/employer",
            data: {
                ...employerMembershipModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async addFreeLancerMembership(freeLancerMembershipModel) {
        const requestData = {
            method: 'POST',
            url: "/membership/add/freelancer",
            data: {
                ...freeLancerMembershipModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async allFreeLancerMembership(freeLancerMembershipModel) {
        const requestData = {
            method: 'POST',
            url: "/membership/all/freelancer",
            data: {
                ...freeLancerMembershipModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async allEmployerMembership() {
        const requestData = {
            method: 'GET',
            url: "/membership/all/employer"
        }

        return await ApiService.customRequest(requestData);
    },

    async editEmployerMembership(membershipModel) {
        const requestData = {
            method: 'POST',
            url: "/membership/edit/employer",
            data: {
                ...membershipModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async editFreelancerMembership(membershipModel) {
        const requestData = {
            method: 'POST',
            url: "/membership/edit/freelancer",
            data: {
                ...membershipModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async removeMembership(membershipModel) {
        const requestData = {
            method: 'POST',
            url: "/membership/remove",
            data: {
                ...membershipModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

}

export default MembershipService;