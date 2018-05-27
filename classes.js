var Facebook = /** @class */ (function () {
    function Facebook(userProfilePicture, userCoverPicture, userName, userGender, userAbout, userContactInfo, userDOB, userCountry, userCity, userWorkplace, userPlacesLived, userRelationshipStatus, userFriendList, userFamilyOnFacebook) {
        var _this = this;
        this.userProfilePicture = userProfilePicture;
        this.userCoverPicture = userCoverPicture;
        this.userName = userName;
        this.userGender = userGender;
        this.userAbout = userAbout;
        this.userContactInfo = userContactInfo;
        this.userDOB = userDOB;
        this.userCountry = userCountry;
        this.userCity = userCity;
        this.userWorkplace = userWorkplace;
        this.userPlacesLived = userPlacesLived;
        this.userRelationshipStatus = userRelationshipStatus;
        this.userFriendList = userFriendList;
        this.userFamilyOnFacebook = userFamilyOnFacebook;
        this.getUserProfilePicture = function () {
            return _this.userProfilePicture;
        };
        this.getUserCoverPicture = function () {
            return _this.userCoverPicture;
        };
        this.getUserName = function () {
            return _this.userName;
        };
        this.getUserGender = function () {
            return _this.userGender;
        };
        this.getUserAbout = function () {
            return _this.userAbout;
        };
        this.getUserDOB = function () {
            return _this.userDOB;
        };
        this.getUserContactInfo = function () {
            return _this.userContactInfo[1];
        };
        this.getUserCountry = function () {
            return _this.userCountry;
        };
        this.getUserCity = function () {
            return _this.userCity;
        };
        this.getUserWorkplace = function () {
            return _this.userWorkplace;
        };
        this.getUserPlacesLived = function () {
            return _this.userPlacesLived;
        };
        this.getUserRelationshipStatus = function () {
            return _this.userRelationshipStatus;
        };
        this.getUserFriendList = function () {
            return _this.getUserFriendList;
        };
        this.getUserfamilyOnFB = function () {
            return _this.userFamilyOnFacebook;
        };
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
    return Facebook;
}());
var fbInstance = new Facebook(new URL("https://www.facebook.com/"), new URL("https://www.facebook.com/"), "Ankit", "Male", "Hey! This is my status on FB.", ["Mobile", "9999571042"], new Date("1992-05-09T21:30:05"), "India", "NOIDA", ["Delhi", "NOIDA", "Gurgaon"]);
console.log("You are on  " + fbInstance.getUserName() + "'s profile.\nHe was born on " + fbInstance.getUserDOB() + " & his mobile number is " + fbInstance.getUserContactInfo() + ".");
// console.log(`Date: ${fbInstance.userDOB} `)
// console.log(`URL:  ${fbInstance.userCoverPicture}`)
