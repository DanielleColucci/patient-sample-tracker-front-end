# Patient Sample Tracker

<img src="./src/assets/screenshot.png" alt="Screnshot of a form to add a sample" width="500">

This app was inspired by my time working in a lung cancer translational research lab. The lab receives patient samples from the main hospital of which the lab is affiliated, and research technicians then work to develop these samples into cell lines and PDX models (mouse models) for use in the lab's research. 

This app functions as a tracker for these samples, allowing the user to track the patient MRN number, the sample number, the date of the sample, and the status of the cell line and PDX model. To gain access to the site, the user must sign up, and an administrator must authorize the account. Admins control admin and authorization status of users, and can also edit and delete any sample (authorized users can only edit or delete their own samples). 

The authorization system is meant to mimic a locked environment that only lab members can access, but it should be noted that it does not provide sufficient security, especially in the context of sensitive patient data, and this particular versionn should not be used as such. 

# [Visit the site here](https://patient-sample-tracker.netlify.app/)

[View back end repo here](https://github.com/DanielleColucci/patient-sample-tracker-back-end)

[View planning materials here](https://trello.com/b/V3dfXxeM/patient-sample-tracker)

---

## Technologies Used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)<br/>
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)<br/>
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)<br />
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)<br />
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)<br />
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)<br />
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)<br />
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)<br />
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)<br />
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)<br />
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)<br />

## Ice Box

- [ ] Light/dark mode
- [ ] AAU I want to be able to search for a sample by the sample number
- [ ] AAU I want to be able to attach gene sequences to patient samples
- [ ] AAU I want to be able to translate gene sequences into amino acid sequences
- [ ] AAU I want to be able to update my profile photo 
- [ ] As an administrator, I want to be able to "archive" formerly authorized users to differentiate between new unauthorized users
- [ ] AAU I want to be able to update my profile photo 