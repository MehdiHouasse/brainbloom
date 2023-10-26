// profileCtrl.js

async function getProfileData(req, res) {
  try {
    // You can add data retrieval logic here if needed, for now, we're just rendering the page
    const message = 'Hello, World'; // Your message
    res.render('profile', { message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getProfileData,
};
