exports.mail = function(req,res) {
  var nodemailer = require('nodemailer');
  var transport = nodemailer.createTransport();
  transport.sendMail({
    from    : req.body.toMail,
    to      : req.body.fromMail,
    subject : req.body.subjectMail,
    text    : req.body.contentsMail
  });
  res.send('メールの送信が完了しました');
};
