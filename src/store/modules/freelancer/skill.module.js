import SkillService from "../../../service/freelancer/skill.service"

const actions = {
    async moduleAddSkill({
        commit
    }, {
        skillModel
    }) {
        commit('')
        return await SkillService.addSkill(skillModel)
    },

    async moduleAllSkills() {
        return await SkillService.allSkills()
    },

    async moduleEditSkill({
        commit
    }, {
        skillModel
    }) {
        commit('')
        return await SkillService.editSkill(skillModel)
    },

    async moduleRemoveSkill({
        commit
    }, {
        skillModel
    }) {
        commit('')
        return await SkillService.removeSkill(skillModel)
    },
}

export const skill = {
    namespaced: true,
    actions
}