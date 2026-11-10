---
slug: global-rclone-flags-settings-rcloneview
title: "Globale Rclone-Flags — Eigene Optionen auf jeden Job in RcloneView anwenden"
authors:
  - alex
description: "Mit Global Rclone Flags in RcloneView wenden Sie zusätzliche rclone-Optionen überall an – inklusive Protokollierung, Konfigurationspasswort und Pfad zur Binärdatei."
keywords:
  - rclone globale Flags
  - RcloneView Einstellungen
  - rclone Flags GUI
  - eingebettete rclone-Einstellungen
  - no-check-certificate
  - rclone Log-Level
  - rclone Konfigurationspasswort
  - benutzerdefinierte rclone-Binärdatei
  - RcloneView erweiterte Einstellungen
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Globale Rclone-Flags — Eigene Optionen auf jeden Job in RcloneView anwenden

> Legen Sie ein rclone-Flag einmal in den Einstellungen fest, und es gilt in ganz RcloneView, statt es für jeden Job zu wiederholen.

Manche Umgebungen brauchen überall eine zusätzliche rclone-Option: ein selbstsigniertes Zertifikat auf einem privaten Server, einen eigenen Speicherort für Logs oder eine verschlüsselte Konfigurationsdatei. Diese Optionen finden Sie auf der Einstellungsseite Embedded Rclone. RcloneView bindet 90+ Anbieter in einem Fenster ein (mount) und synchronisiert sie, unter Windows, macOS und Linux; diese Einstellungen gelten für die gesamte eingebettete Engine.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wo die Einstellungen liegen

Öffnen Sie den Tab Settings und wählen Sie Embedded Rclone. Dort finden Sie den Speicherort der rclone-Binärdatei, den Speicherort der rclone.conf, die Standardordner für Download und Upload, den Schalter Stop rclone on App Exit, Protokolloptionen, das Feld Config Password und das Feld Global Rclone Flags.

Embedded Rclone lauscht standardmäßig auf `http://127.0.0.1:5582`, und RcloneView kommuniziert über die rclone-RC-API mit dieser Engine. Änderungen an diesen Einstellungen beeinflussen, wie die Engine startet – starten Sie Embedded Rclone daher nach dem Bearbeiten neu.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView-Remote-Einrichtung mit den eingebetteten rclone-Einstellungen" class="img-large img-center" />

## Global Rclone Flags verwenden

Das Feld Global Rclone Flags nimmt zusätzliche rclone-Flags entgegen, die breit angewendet werden. Das dokumentierte Beispiel ist `--no-check-certificate`, praktisch, wenn ein WebDAV- oder HTTPS-basierter Server ein selbstsigniertes Zertifikat verwendet. Setzen Sie es mit Bedacht ein: Es deaktiviert die Zertifikatsprüfung, daher nur für vertrauenswürdige private Server, nicht für öffentliche Endpunkte.

Für die Feinabstimmung eines einzelnen Jobs bevorzugen Sie die Advanced Settings pro Job (Transfers, Checker, Prüfsumme, Wiederholungen). Reservieren Sie globale Flags für Optionen, die wirklich überall gelten sollen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Job-Einstellungen in RcloneView ergänzen globale Flags" class="img-large img-center" />

## Protokollierung und Schutz der Konfiguration

Aktivieren Sie Enable rclone Logging, wählen Sie einen Log-Ordner und einen Dateinamen und legen Sie ein Level fest: DEBUG, INFO, NOTICE oder ERROR. DEBUG ist am ausführlichsten und wird vom Support angefordert, wenn Sie ein Problem melden. Klicken Sie auf Restart Embedded Rclone, reproduzieren Sie das Problem und senden Sie dann die Log-Datei.

Ist Ihre rclone.conf verschlüsselt, geben Sie hier das Config Password ein, damit die eingebettete Engine Ihre Remotes lesen kann. Sie können RcloneView außerdem auf eine eigene rclone-Binärdatei oder einen eigenen Konfigurationspfad verweisen; das In-App-Self-Update hält das eingebettete rclone aktuell.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView neben den rclone-Logs" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen**: Laden Sie es von [rcloneview.com](https://rcloneview.com/src/download.html) herunter.
2. Öffnen Sie Settings, dann Embedded Rclone, und prüfen Sie die aktuellen Pfade.
3. Tragen Sie das benötigte Flag in Global Rclone Flags ein und aktivieren Sie bei Bedarf die Protokollierung.
4. Starten Sie Embedded Rclone neu und führen Sie einen kleinen Testjob aus.

Einige gut gewählte globale Einstellungen halten jeden Job konsistent – ohne zusätzliche Klicks.

---

**Weiterführende Anleitungen:**

- [Log Debug: Übertragungen analysieren](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [Rclone Self Update in RcloneView](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [SSL/TLS-Zertifikatsfehler beheben](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
