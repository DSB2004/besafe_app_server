# BeSafe Server
This documentation includes the API endpoint details for the women/child safety app. Please refer to it for any issues or clarifications.



## Run Locally


#### Clone the project

```bash
git clone https://github.com/DSB2004/besafe_app_server.git
```

#### Go to the project directory

```bash
  cd besafe_app_server
```

#### Install dependencies

```bash
  npm install
```

#### Start Server on Dev mode

```bash
npm run dev
```
#### Start Server on Production mode

```bash
npm run start
```

## API Reference
#### Base URL
https://besafe-app-server-git-main-damanjeet-singhs-projects-0c53512a.vercel.app
### Auth API
#### For testing 


| Key | Value     | 
| :-------- | :------- | 
| `email` | `admin123@gmail.com` | 
| `password` | `123456` |

#### Login

```http
  GET /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required!!** User Email|
| `password` | `string` | **Required!!** User Password|


#### Register

```http
  GET /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required!!** User Email|
| `password` | `string` | **Required!!** User Password|


