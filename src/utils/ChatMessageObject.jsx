const createChatObject = (newUserDisplayName, newUserID, newUserProfilePicture, newUserContent) => {
    let inputObject = {
        userDisplayName: String,
        userID: BigInt,
        userProfilePicture: Object,
        userContent: String
    }
    
    inputObject.userDisplayName = newUserDisplayName
    inputObject.userID = newUserID
    inputObject.userProfilePicture = newUserProfilePicture
    inputObject.userContent = newUserContent

    return inputObject;
}

export default createChatObject;