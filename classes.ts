class Facebook {

    constructor(
        private userProfilePicture: URL,
        private userCoverPicture: URL ,
        private userName: string,
        private userGender: string,
        private userAbout: string,
        private userContactInfo: [string,string],
        private userDOB?: Date,
        private userCountry?: string,
        private userCity?: string,        
        private userWorkplace?: string[],
        private userPlacesLived?: string[],
        private userRelationshipStatus?: string,
        private userFriendList?: string[],
        private userFamilyOnFacebook?:[string,string])
        {
        this.userProfilePicture = userProfilePicture;
        this.userCoverPicture = userCoverPicture;     
        this.userName = userName;
        this.userGender = userGender;
        this.userAbout = userAbout;
        this.userDOB = userDOB;
        this.userContactInfo = userContactInfo;
        this.userCountry = userCountry;
        this.userCity = userCity;        
        this.userWorkplace = userWorkplace;
        this.userPlacesLived = userPlacesLived;
        this.userRelationshipStatus = userRelationshipStatus;
        this.userFriendList = userFriendList;
        this.userFamilyOnFacebook = userFamilyOnFacebook;
    }

    getUserProfilePicture = () => {
        return this.userProfilePicture;
    }

    getUserCoverPicture = () => {
        return this.userCoverPicture;
    }
    getUserName = () => {
        return this.userName;
    }
    getUserGender = () => {
        return this.userGender;
    }
    getUserAbout = () => {
        return this.userAbout;
    }
    getUserDOB = () => {
        return this.userDOB;
    }
    getUserContactInfo = () => {
        return this.userContactInfo[1];
    }
    getUserCountry = () => {
        return this.userCountry;
    }
    getUserCity = () =>{
    return this.userCity;
    }

    getUserWorkplace = () => {
        return this.userWorkplace;
    }
    getUserPlacesLived = () => {
        return this.userPlacesLived;
    }
    getUserRelationshipStatus = () =>{
    return this.userRelationshipStatus;
    }

    getUserFriendList = () => {
        return this.getUserFriendList;
    }
    getUserfamilyOnFB = () =>{
    return this.userFamilyOnFacebook;
    }
}

let fbInstance = new Facebook(new URL(`https://www.facebook.com/`),new URL(`https://www.facebook.com/`),
"Ankit", "Male","Hey! This is my status on FB.",["Mobile","9999571042"],new Date(`1992-05-09T21:30:05`),"India","NOIDA",
["Delhi","NOIDA","Gurgaon"]);

console.log(`You are on  ${fbInstance.getUserName()}'s profile.
He was born on ${fbInstance.getUserDOB()} & his mobile number is ${fbInstance.getUserContactInfo()}.`)
// console.log(`Date: ${fbInstance.userDOB} `)
// console.log(`URL:  ${fbInstance.userCoverPicture}`)