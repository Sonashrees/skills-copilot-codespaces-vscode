function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillMemberController',
        conytrollerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    };
}