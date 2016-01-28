module.exports = function(Attendance) {
  Attendance.validatesPresenceOf('personId', {
    message: 'Cannot be blank'
  });
};
