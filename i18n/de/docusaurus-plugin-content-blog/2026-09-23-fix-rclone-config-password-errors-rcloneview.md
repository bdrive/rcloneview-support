---
slug: fix-rclone-config-password-errors-rcloneview
title: "Rclone Config Password Fehler beheben — Verschlüsselte Konfigurationsprobleme mit RcloneView lösen"
authors:
  - robin
description: "Beheben Sie rclone.conf Config Password Fehler in RcloneView — Aussperrungen, fehlgeschlagene Entschlüsselung und vergessene Passwörter — und verbinden Sie Ihre Remotes wieder."
keywords:
  - rclone config password Fehler
  - verschlüsselte rclone.conf
  - RcloneView config password
  - rclone conf Entschlüsselung fehlgeschlagen
  - rclone config password vergessen
  - config password stimmt nicht überein
  - rclone Konfigurationsverschlüsselung
  - RcloneView Remotes gesperrt
  - rclone config wiederherstellen
  - rclone config Wiederherstellung
tags:
  - RcloneView
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Config Password Fehler beheben — Verschlüsselte Konfigurationsprobleme mit RcloneView lösen

> Wenn das Config Password, das Ihre rclone.conf schützt, nicht mehr synchron ist, hören alle Remotes in RcloneView gleichzeitig auf zu laden — so diagnostizieren Sie das Problem und kommen wieder rein.

Der Settings-Tab von RcloneView enthält unter Embedded Rclone eine Option **Config Password**, die Ihre gesamte rclone.conf-Datei verschlüsselt — die Datei, die alle von Ihnen konfigurierten Remotes enthält, nicht nur einen Anbieter. Das unterscheidet sich vom Verschlüsseln einzelner Dateien mit einem Crypt-Remote; ein Config Password schützt die Zugangsdaten und Tokens aller Remotes auf einmal. Wenn dieses Passwort falsch, fehlend oder nicht mehr mit dem Wert synchron ist, der die Datei tatsächlich verschlüsselt hat, kann RcloneView kein einziges Remote mehr entschlüsseln, und der gesamte Explorer erscheint leer oder wirft beim Start Verbindungsfehler.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ein Config-Password-Problem erkennen

Das Symptom ist in der Regel vollständig, nicht partiell: Statt dass nur ein Remote die Verbindung verliert, schlagen alle Remotes gleichzeitig fehl — Google Drive, S3, Dropbox, alle zusammen —, meist direkt nach dem Start von RcloneView oder nach einem Neustart des Embedded-Rclone-Prozesses. Prüfen Sie den **Log**-Tab in der Info View unten, oder aktivieren Sie unter Settings > Embedded Rclone die dateibasierte Protokollierung mit Log-Level DEBUG und starten Sie den Embedded-Rclone-Prozess neu. Ein Fehler bei der Konfigurationsentschlüsselung zeigt sich im Log deutlich anders als ein anbieterspezifischer Authentifizierungsfehler — das ist der zuverlässigste Weg, ihn von einem abgelaufenen OAuth-Token oder einem widerrufenen API-Schlüssel zu unterscheiden.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Überprüfung von Auftragsverlauf und Logs nach einem Config-Password-Fehler in RcloneView" class="img-large img-center" />

## Häufige Ursachen und Lösungen

Die meisten Config-Password-Probleme lassen sich auf eine dieser Situationen zurückführen:

**Passwort nach einem Update oder einer Neuinstallation falsch eingegeben.** Wenn Sie RcloneView auf eine neue Maschine verschoben oder neu installiert haben, geben Sie das exakte Config Password unter Settings > Embedded Rclone > Config Password erneut ein. Eine teilweise Übereinstimmung gibt es nicht — schon ein falsches Zeichen verhindert die Entschlüsselung der gesamten Datei.

**Ein veralteter rclone.conf-Pfad.** Die Einstellung Local Rclone config location von RcloneView zeigt auf eine bestimmte Datei. Wenn eine frühere Installation an diesem Pfad eine unverschlüsselte oder anders verschlüsselte Konfiguration hinterlassen hat, liest RcloneView möglicherweise die komplett falsche Datei. Prüfen Sie, ob der Konfigurationsort in Settings mit dem Speicherort Ihrer tatsächlich verschlüsselten rclone.conf übereinstimmt.

**Vergessenes Passwort ohne Wiederherstellungsoption.** Die Konfigurationsverschlüsselung von rclone hat keine Hintertür — wenn das Passwort wirklich verloren ist, kann die bestehende rclone.conf nicht entschlüsselt werden. Ihr einziger Weg nach vorn ist, die verschlüsselte Datei zu entfernen und jedes Remote über **Remote** > **New Remote** von Grund auf neu hinzuzufügen — weshalb es sich lohnt, diesen Wert genauso sorgfältig in einem Passwortmanager aufzubewahren wie jede Cloud-Anbieter-Zugangsdaten.

<img src="/support/images/en/blog/new-remote.png" alt="Ein Remote in RcloneView nach einem Config-Password-Reset erneut hinzufügen" class="img-large img-center" />

## Aussperrungen künftig vermeiden

Bevor Sie ein Config Password ändern, exportieren Sie Ihre aktuellen Auftragsdefinitionen mit der **Export**-Option des Job Managers — sie speichert die Auftragseinstellungen als portable JSON-Datei und dokumentiert, welche Remotes und Aufträge existierten, auch wenn sie Zugangsdaten nicht von selbst wiederherstellt. RcloneView bindet außerdem 90+ Anbieter aus einem einzigen Fenster unter Windows, macOS und Linux ein und synchronisiert sie, sodass der Wiederaufbau der Remotes über New Remote nur Minuten statt Stunden dauert.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Auftragseinstellungen vor dem Ändern des Config Passwords in RcloneView überprüfen" class="img-large img-center" />

Beim Eskalieren an den Support folgen Sie denselben Schritten zur Protokollerfassung wie bei anderen rclone-Problemen: DEBUG-Protokollierung aktivieren, den Embedded-Rclone-Prozess neu starten, den Fehler reproduzieren und die Log-Datei senden — Entschlüsselungsfehler lassen sich aus rohen Log-Ausgaben deutlich leichter diagnostizieren als aus einem Screenshot.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Prüfen Sie Settings > Embedded Rclone > Config Password und bestätigen Sie, dass es mit dem Wert übereinstimmt, der Ihre rclone.conf ursprünglich verschlüsselt hat.
3. Aktivieren Sie DEBUG-Protokollierung und starten Sie den Embedded-Rclone-Prozess neu, um zu bestätigen, dass es sich um einen Entschlüsselungsfehler und nicht um ein Anbieter-Authentifizierungsproblem handelt.
4. Falls das Passwort wirklich nicht wiederhergestellt werden kann, entfernen Sie die verschlüsselte Konfiguration und fügen Sie Remotes über New Remote erneut hinzu.

Ein Config Password schützt alle Zugangsdaten in Ihrer rclone.conf auf einmal — behandeln Sie es daher mit derselben Sorgfalt wie ein Master-Passwort. Geht es verloren, müssen Sie Ihre Remote-Liste von vorn aufbauen.

---

**Weitere Anleitungen:**

- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Fix Crypt Remote Decryption Errors — Password and Config Issues with RcloneView](https://rcloneview.com/support/blog/fix-crypt-remote-password-decrypt-errors-rcloneview)
- [Fix License Key Activation Errors — Resolve PLUS License Issues with RcloneView](https://rcloneview.com/support/blog/fix-license-key-activation-errors-rcloneview)

<CloudSupportGrid />
