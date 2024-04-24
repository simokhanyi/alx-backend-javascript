async function asyncUploadUser(uploadPhoto, createUser) {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();
    
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If any async function fails, return an empty object
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;
