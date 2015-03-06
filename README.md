EMAIL SERVER: AN EMBER APPLICATION

For a single user, this application can "send" emails, store the emails on an emails page, and view individual "sent" emails, with the option of deleting them.

I am doing little more than that for one reason: in the second hour of this assessment I added full functionality for an email to be created and stored into the DS. My controllers, models, routes were all good.  However, the data was not stored.  The emails did not show up in the list.  Worse than that: there was no error.  It just wasn't going through.  I hammered away at solving this for 3 hours, before I caught the missing ">" at the end of my model's script tag in the index.  Damn!

That was useful, at least for learning about Ember inspector and what it can do for me.  It was also incredibly frustrating.  It is good to know that when we're making applications outside of assessments, we'll have folks to look over our shoulders and catch those blind spots we all have.  This was what I really took away from this assessment.

(Incidentally, the two day project of the auctionhouse is a much more complete example of my work with Ember, esepcially since on the second day when most functionality was loaded up, I was working solo.  I just thought I'd add a link to it here: https://github.com/jklmaynard/MayCusAuctions. Thanks.)

2015 James Maynard LicSense: 123456789
