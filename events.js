class GradeEvents {

    constructor() {
        this.requirements = {};
    }

    initReqs() {
        this.requirements.containsTwoSprites  = 
        this.requirements.greenFlagHandled    =
        this.requirements.spriteClickHandled  =
        this.requirements.keyPressHandled     =
        this.requirements.spriteSaysSomething =
        this.requirements.spriteChangesSize   =
        this.requirements.spriteResetsSize    = false;
    }

    grade(fileObj, user) {
        initReqs();

    }
    
}