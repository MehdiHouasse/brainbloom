import React from 'react';

const ProfilePage = ({ userProfileData }) => {
  const { name, quizzesTaken } = userProfileData;

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Hello, {name}!</h2>
      <p>Here are the quizzes you have taken before:</p>
    </div>
  );
};

export default ProfilePage;
