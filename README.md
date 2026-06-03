# UPI Sound Notifier

## Overview

UPI Sound Notifier is an Android application developed using React Native and Kotlin that detects UPI transaction notifications and provides customized audio alerts based on transaction status.

The application monitors incoming notifications, analyzes their content, and classifies them into:

* Money Received
* Money Sent
* Payment Failed

Based on the detected transaction type, the application plays a corresponding custom sound, allowing users to identify transaction outcomes without checking their phones.

---

## Tech Stack

* React Native
* Kotlin
* Android Notifications
* MediaPlayer
* ADB
* Logcat

---

## Features

* Detects incoming UPI transaction notifications.
* Classifies notifications into transaction categories.
* Extracts transaction-related information.
* Plays customized audio alerts for different transaction types.
* Supports real-time notification monitoring.
* Successfully tested on a real Android device.

---

## Workflow

UPI Notification
↓
Notification Analysis
↓
Transaction Classification
↓
Custom Sound Playback
↓
User Alert

---

## Future Enhancements

* Transaction history dashboard
* User-customizable sound profiles
* Enhanced UPI app-specific detection
* Analytics and reporting

---

## Author

Ruchitha Arelli
