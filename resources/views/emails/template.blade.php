<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>
    body, * {
      font-family: Roboto;
    }

    .bg-primary {
      background-color: #4f5962;
    }
    .bg-secondary {
      background-color: #ffc107;
    }
    .header {
      margin-bottom: 30px;
      height: 50px;
    }
    .footer {
      color: white;
      font-weight: 600;
      font-size: 15px;
      padding: 15px;
      margin-top: 30px;
      text-align: center;
    }

    .justify-center {
      text-align: center;
      vertical-align: middle;
    }

    .sub-title {
      font-weight: 700;
      font-size: 17px;
    }

    .text {
      font-weight: 500;
    }

    .text-section {
      margin: 10px;
    }

    .btn {
      text-decoration: none;
      color: white !important;
      padding: 10px;
      border-radius: 2px;
      font-size: 18px;
    }

    .btn-accent {
      color: white !important;
      background-color: #FF9900;
    }

    .btn-accent:hover {
      color: white;
      background-color: #FF9000;
    }

    table {
      border-collapse: collapse;
    }

    table, th, td {
      border: 1px solid lightgray;
      padding: 10px 20px;
    }

    .red {
      color: #cc0000;
    }
  </style>
</head>
<body>
  <div class="bg-primary header">

  </div>

  @yield('content')

  <div class="bg-secondary footer">
      <span>&nbsp;&nbsp;Daniel Meneses C&nbsp;&nbsp; &copy; 2019</span>
  </div>
</body>
</html>
