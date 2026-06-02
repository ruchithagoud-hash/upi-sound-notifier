package com.upisoundnotifier

import android.media.MediaPlayer
import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import android.util.Log

class NotificationListener : NotificationListenerService() {

    override fun onNotificationPosted(sbn: StatusBarNotification) {

        val extras = sbn.notification.extras

        val title = extras.getString("android.title") ?: ""
        val text = extras.getCharSequence("android.text")?.toString() ?: ""

        val notificationContent = "$title $text".lowercase()

        Log.d("UPI_NOTIFIER", "TITLE=$title")
        Log.d("UPI_NOTIFIER", "TEXT=$text")
        Log.d("UPI_NOTIFIER", "CONTENT=$notificationContent")

        val amountRegex = Regex("(₹|rs\\.?\\s?)(\\d+[\\d,]*)")
        val amountMatch = amountRegex.find(notificationContent)

        if (amountMatch != null) {
            val amount = amountMatch.groupValues[2]
            Log.d("UPI_NOTIFIER", "AMOUNT=$amount")
        }

        when {

            notificationContent.contains("received") -> {

                Log.d("UPI_NOTIFIER", "MONEY_RECEIVED")

                val player = MediaPlayer.create(
                    applicationContext,
                    R.raw.money_received
                )

                if (player != null) {
                    Log.d("UPI_NOTIFIER", "SOUND_LOADED")
                    player.start()
                } else {
                    Log.d("UPI_NOTIFIER", "SOUND_FAILED")
                }
            }

            notificationContent.contains("sent") -> {

                Log.d("UPI_NOTIFIER", "MONEY_SENT")

                val player = MediaPlayer.create(
                    applicationContext,
                    R.raw.money_sent
                )

                if (player != null) {
                    Log.d("UPI_NOTIFIER", "SOUND_LOADED")
                    player.start()
                } else {
                    Log.d("UPI_NOTIFIER", "SOUND_FAILED")
                }
            }

            notificationContent.contains("failed") -> {

                Log.d("UPI_NOTIFIER", "PAYMENT_FAILED")

                val player = MediaPlayer.create(
                    applicationContext,
                    R.raw.payment_failed
                )

                if (player != null) {
                    Log.d("UPI_NOTIFIER", "SOUND_LOADED")
                    player.start()
                } else {
                    Log.d("UPI_NOTIFIER", "SOUND_FAILED")
                }
            }

            else -> {
                Log.d("UPI_NOTIFIER", "OTHER_NOTIFICATION")
            }
        }
    }

    override fun onNotificationRemoved(sbn: StatusBarNotification) {
        Log.d("UPI_NOTIFIER", "NOTIFICATION_REMOVED")
    }
}