<!--
Make engineers happy and fill out the issue template. For each bug without sufficient information a kitten dies somewhere in the world.
And if it is no bug with regards to customer related data you might also want to fill this in the public repositories instead ;-)
--> 

**Hi! We use different kinds of templates depending on the purpose of the ticket. Please help us maintaining structure and preparing the right information to take over. Choose a template below, copy/paste it's contents here and fill in the details. THX!**

- **For Customer-FRs, please use this ticket template https://github.com/owncloud/platform/edit/master/docs/handbook/templates/FR_template.md**

- **For Support cases, please find the ticket template below**

### General
- Link to customer portal (if not created from Portal)
- Link to config report

### Affected customers
- ...

### Steps to reproduce
1.
2.
3.

Make sure to clarify whether the bug was reproduced by YOU or by the customer!

### Expected behaviour
Tell us what should happen

### Actual behaviour
Tell us what happens instead

### Server configuration
**Operating system**:

**Web server:**

**Database:**

**PHP version:**

**ownCloud version:** (see ownCloud admin page)

**Updated from an older ownCloud or fresh install:**

**Where did you install ownCloud from:**

**Signing status (ownCloud 9.0 and above):**

```
Login as admin user into your ownCloud and access 
http://example.com/index.php/settings/integrity/failed 
paste the results here.
```

**List of activated apps:**

```
If you have access to your command line run e.g.:
sudo -u www-data php occ app:list
from within your ownCloud installation folder
```

**The content of config/config.php:**

```
If you have access to your command line run e.g.:
sudo -u www-data php occ config:list system
from within your ownCloud installation folder

or 

Insert your config.php content here
(Without the database password, passwordsalt and secret)
```

**Are you using external storage, if yes which one:** local/smb/sftp/...

**Are you using encryption:** yes/no

**Are you using an external user-backend, if yes which one:** LDAP/ActiveDirectory/Webdav/...

#### LDAP configuration (delete this part if not used)

```
With access to your command line run e.g.:
sudo -u www-data php occ ldap:show-config
from within your ownCloud installation folder

Without access to your command line download the data/owncloud.db to your local
computer or access your SQL server remotely and run the select query:
SELECT * FROM `oc_appconfig` WHERE `appid` = 'user_ldap';


Eventually replace sensitive data as the name/IP-address of your LDAP server or groups.
```

### Client configuration
**Browser:**

**Operating system:**

### Logs
#### Web server error log
```
Insert your webserver log here
```

#### ownCloud log (data/owncloud.log)
```
Insert your ownCloud log here
```

#### Browser log
```
Insert your browser log here, this could for example include:

a) The javascript console log
b) The network log 
c) ...
```