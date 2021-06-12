var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BA49UZtOjupVDagE9176rbhbhqXP-PzK-IM7bsKQ-CkjQMH_yx-fPcAmsBsBP-fqW8XXzrHsYoNE5kVA1dKarSo",
  privateKey: "7-8B2d_xGXAbFlQMs3qpez4UZlFor4C3tTSuYVoBq2o",
};

webPush.setVapidDetails(
  "mailto:tugasmikrotik@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/exdt085xZ80:APA91bGiRb_DFhIEWHoaGcW-VjpVcYNbierPV0KUlSgZWTeSwddz8fqcp2sJkMemfM0V8ZcLg8CALXX0bLdA_53fc49IGoeHhE7j3BNLkb7ATMZtGJEJu2Bjg3X8rDVmE5asg99Rz85y",
  keys: {
    p256dh:
      "BEBKrEbVh4Dtm+P9nVgNQ1/ThfnsIeg9B2hTPMdCNwB8K0+rm/ku6kbdawueoRKv5itt4xheKtV8KMl+x40hf0o=",
    auth: "mHGso74EfS9IEEfv7v75TA==",
  },
};

var payload = "Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!";

var options = {
  gcmAPIKey: "148238335389",
  TTL: 60,
};

webPush.sendNotification(pushSubscription, payload, options);
