import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Wrapper from './styles';
import { PageHero } from '../../components';
import { useUserContext } from '../../context/user_context';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { useProductsContext } from '../../context/products_context';

function ProfilePage() {
  const {
    currentUser: { displayName, photoURL },
    logoutUser,
    updateUserProfileImage,
    updateUserProfileName,
    uploadProfileImage,
    updateUserProfilePassword,
  } = useUserContext();
  const { clearCart } = useCartContext();
  const { closeSidebar } = useProductsContext();
  const [image, setImage] = useState(photoURL);
  const [name, setName] = useState(displayName || 'USER');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      handleImageUpload(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = async (image) => {
    setLoading(true);
    const response_1 = await uploadProfileImage(image);
    if (response_1.success) {
      const { url } = response_1.data;
      try {
        // eslint-disable-next-line
        const response_2 = await updateUserProfileImage(url);
        toast.success('Profile image changed successfully');
      } catch (error) {
        setLoading(false);
        toast.error(`Error: ${error.message}`);
      }
    } else {
      const { message } = response_1;
      toast.error(`Error: ${message}`);
    }
    setLoading(false);
  };

  const handleSubmitName = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // eslint-disable-next-line
      const response_2 = await updateUserProfileName(name);
      toast.success('Profile name changed successfully');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      return toast.error('Password should be atleast 6 characters');
    }
    if (newPassword !== confirmNewPassword) {
      return toast.error('Passwords do not match');
    }
    setLoading(true);
    try {
      // eslint-disable-next-line
      const response_2 = await updateUserProfilePassword(confirmNewPassword);
      toast.success('Profile password changed successfully');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <PageHero title='profile' />
      <div className='profile-img'>
        <img src={image} alt='profile' />
        <label className='btn' htmlFor='profile'>
          upload new
        </label>
        <input
          className='file-input'
          disabled={loading}
          type='file'
          accept='image/*'
          name='profile'
          id='profile'
          onChange={handleImage}
        />
      </div>
      <div className='seperator'>
        <hr />
        <span>Display Name</span>
      </div>
      <form onSubmit={handleSubmitName}>
        <div className='form-control'>
          <input
            type='text'
            name='name'
            className='input'
            placeholder='Display name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' disabled={loading} className='btn submit-btn'>
          save
        </button>
      </form>
      <div className='seperator'>
        <hr />
        <span>Password</span>
      </div>
      <form onSubmit={handleSubmitPassword}>
        <div className='form-control'>
          <input
            type='password'
            name='password'
            className='input'
            placeholder='New password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <input
            type='password'
            name='password'
            className='input'
            placeholder='Confirm new password'
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
        <button type='submit' disabled={loading} className='btn submit-btn'>
          change password
        </button>
      </form>
      <div className='seperator'>
        <hr />
      </div>
      <div className='btn-container'>
        <Link to='/orders' className='btn link'>
          orders
        </Link>
        <button
          className='btn link'
          onClick={() => {
            clearCart();
            logoutUser();
            closeSidebar();
          }}
        >
          logout
        </button>
      </div>
    </Wrapper>
  );
}

export default ProfilePage;
