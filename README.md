# UPI Sound Notifier

## Overview

UPI Sound Notifier is an Android application built using React Native and Kotlin that monitors incoming UPI transaction notifications and provides customized audio alerts based on transaction status.

The application detects and classifies notifications as:

* Money Received
* Money Sent
* Payment Failed
and plays corresponding custom sound alerts to help users instantly identify transaction outcomes.

## Tech Stack

* React Native
* Kotlin
* Android Notifications
* NotificationListenerService
* MediaPlayer
* ADB
* Logcat

## Features

* Detects incoming UPI transaction notifications.
* Classifies notifications based on transaction status.
* Extracts transaction-related information from notification content.
* Plays custom audio alerts for different transaction types.
* Supports Android notification monitoring through Notification Access permission.

## Project Workflow

Notification Received
→ Notification Listener
→ Notification Content Analysis
→ Transaction Classification
→ Custom Sound Playback
→ User Alert

## Future Enhancements

* Transaction history dashboard
* User-customizable sound profiles
* PhonePe and Google Pay specific detection
* Transaction analytics
* Local database integration


## Author

Ruchitha Arelli
