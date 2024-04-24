import asyncUploadUser from './100-awaits';

// Mock implementations of uploadPhoto and createUser
const uploadPhotoMock = jest.fn();
const createUserMock = jest.fn();

describe('asyncUploadUser', () => {
  it('should return photo and user responses', async () => {
    uploadPhotoMock.mockResolvedValue('photo-response');
    createUserMock.mockResolvedValue('user-response');

    const result = await asyncUploadUser(uploadPhotoMock, createUserMock);

    expect(result).toEqual({
      photo: 'photo-response',
      user: 'user-response'
    });
  });

  it('should return empty object if any async function fails', async () => {
    uploadPhotoMock.mockRejectedValue('photo-error');
    createUserMock.mockResolvedValue('user-response');

    const result = await asyncUploadUser(uploadPhotoMock, createUserMock);

    expect(result).toEqual({
      photo: null,
      user: null
    });
  });
});
