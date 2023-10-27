

async function getProfileData(req, res) {
  try {

    const message = 'Hello, World';
    res.render('profile', { message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getProfileData,
};
