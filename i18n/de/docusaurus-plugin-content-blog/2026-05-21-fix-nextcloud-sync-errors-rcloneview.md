---
slug: fix-nextcloud-sync-errors-rcloneview
title: "Nextcloud-Synchronisationsfehler beheben — WebDAV- und Authentifizierungsprobleme mit RcloneView lösen"
authors:
  - morgan
description: "Beheben Sie Nextcloud-Synchronisationsfehler in RcloneView — beheben Sie WebDAV-Authentifizierungsfehler, 423-Dateisperrkonflikte, SSL-Fehler und langsame Übertragungs-Timeouts."
keywords:
  - Nextcloud-Synchronisationsfehler beheben
  - Nextcloud WebDAV-Authentifizierungsfehler
  - Nextcloud 423 gesperrt beheben
  - Nextcloud-Verbindungs-Timeout RcloneView
  - Nextcloud SSL-Zertifikatsfehler rclone
  - RcloneView Nextcloud-Fehlerbehebung
  - Nextcloud-Backup funktioniert nicht
  - WebDAV-Synchronisationsfehler beheben
  - rclone Nextcloud 401-Fehler
  - Nextcloud-Dateisperrkonflikt lösen
tags:
  - troubleshooting
  - nextcloud
  - tips
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud-Synchronisationsfehler beheben — WebDAV- und Authentifizierungsprobleme mit RcloneView lösen

> Nextcloud-Synchronisationsfehler in RcloneView lassen sich fast immer auf eine von vier Grundursachen zurückführen — und für jede gibt es eine konkrete, reproduzierbare Lösung.

Nextcloud ist die am weitesten verbreitete selbst gehostete Cloud-Plattform, aber ihre WebDAV-Schnittstelle bringt eine eigene Klasse von Synchronisationsproblemen mit sich. Wenn RcloneView mit einem Nextcloud-Server synchronisiert, treten Fehler in Form von 401-Authentifizierungsfehlern, 423-Dateisperrantworten, SSL-Zertifikatsablehnungen oder mitten im Vorgang stockenden Übertragungen auf. Jeder Fehlercode zeigt genau an, wo man ansetzen muss — und die Lösung ist meist eine einzelne Konfigurationsänderung in RcloneView oder auf dem Nextcloud-Server selbst.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Authentifizierungsfehler (401 Unauthorized)

Ein 401-Fehler im **Log-Tab** von RcloneView bedeutet, dass Nextcloud die Anmeldedaten in Ihrem WebDAV-Remote abgelehnt hat. Die häufigste Ursache ist die Verwendung Ihres regulären Kontopassworts anstelle eines Nextcloud-App-Passworts. Wenn die Zwei-Faktor-Authentifizierung für Ihr Nextcloud-Konto aktiviert ist, funktioniert das Standardpasswort niemals für den API-Zugriff — Sie müssen ein app-spezifisches Passwort erstellen.

Melden Sie sich in Ihrer Nextcloud-Weboberfläche an, gehen Sie zu **Einstellungen > Sicherheit > App-Passwörter**, erstellen Sie ein neues App-Passwort mit einer erkennbaren Bezeichnung wie „RcloneView" und kopieren Sie es sofort. Öffnen Sie dann in RcloneView **Remote-Tab > Remote-Manager**, wählen Sie Ihr Nextcloud-Remote aus, klicken Sie auf **Bearbeiten**, ersetzen Sie das Passwort durch das neue App-Passwort und speichern Sie. Führen Sie den fehlgeschlagenen Synchronisationsjob erneut aus und beobachten Sie das Log-Tab — der 401-Fehler sollte nicht mehr auftreten.

Wenn Sie keine Zwei-Faktor-Authentifizierung verwenden und dennoch 401-Fehler auftreten, überprüfen Sie, ob das WebDAV-URL-Format korrekt ist. Der Standard-WebDAV-Pfad von Nextcloud lautet `https://your-server.com/remote.php/dav/files/your-username/` — ein fehlender abschließender Schrägstrich oder ein falscher Benutzername im Pfad erzeugt auch bei gültigen Anmeldedaten Fehler, die wie Authentifizierungsprobleme aussehen.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Nextcloud WebDAV credentials in RcloneView Remote Manager" class="img-large img-center" />

## Dateisperrkonflikte (423 Locked)

Nextcloud verwendet serverseitiges Dateisperren, um gleichzeitige Änderungen zu verhindern, und RcloneView kann auf 423-Locked-Antworten stoßen, wenn Dateien synchronisiert werden, die von einem aktiven Nextcloud-Desktop-Client oder einer Browsersitzung geöffnet gehalten werden. Dies tritt am häufigsten während der Geschäftszeiten auf, wenn Teammitglieder aktiv Dateien bearbeiten, während gleichzeitig ein geplanter Backup-Job läuft.

Die zuverlässigste Lösung ist das Timing: Planen Sie RcloneView-Synchronisationsjobs mit dem PLUS-Lizenz-Scheduler für Zeiten außerhalb der Spitzenlast — nachts oder während vorhersehbarer Zeiten mit geringer Aktivität. Reduzieren Sie in den **erweiterten Einstellungen** des Jobs die Anzahl gleichzeitiger Dateiübertragungen. Weniger parallele Übertragungen bedeuten weniger gleichzeitige Sperranfragen, und vorübergehende Sperren lösen sich schneller, wenn RcloneView den Server nicht von allen Seiten gleichzeitig belastet.

RcloneView wiederholt fehlgeschlagene Vorgänge bis zur konfigurierten Anzahl an Wiederholungsversuchen (Standard: 3). Prüfen Sie nach Abschluss eines Jobs den **Job-Verlauf**, um zu sehen, ob Dateien den Status „Fehlerhaft" aufweisen. Ist die Fehleranzahl gering, löst ein manuelles erneutes Ausführen des Synchronisationsjobs verbleibende Sperrkonflikte, sobald die betroffenen Dateien geschlossen wurden.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Nextcloud sync job history and error details in RcloneView" class="img-large img-center" />

## SSL-Zertifikatsfehler

Selbst gehostete Nextcloud-Installationen verwenden häufig selbstsignierte SSL-Zertifikate, die rclone standardmäßig ablehnt. Der Fehler erscheint im Log-Tab als Zertifikatsüberprüfungsfehler. Um dies zu umgehen, öffnen Sie **Einstellungen-Tab > Embedded Rclone** und fügen Sie `--no-check-certificate` im Feld **Global Rclone Flags** hinzu. Dies gilt global für alle Remotes. Wenn also einige Remotes gültige Zertifikate verwenden, deren Überprüfung Ihnen wichtig ist, sollten Sie stattdessen das selbstsignierte Zertifikat zum vertrauenswürdigen Zertifikatsspeicher Ihres Betriebssystems hinzufügen.

Bei Nextcloud-Servern hinter einem Reverse-Proxy stellen Sie sicher, dass der Proxy die korrekten Header weiterleitet. Ein falsch konfigurierter Proxy kann Umleitungsschleifen verursachen, die sich als SSL- oder Verbindungsfehler zeigen, selbst wenn das Zertifikat selbst gültig ist.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active Nextcloud sync progress in RcloneView Transferring tab" class="img-large img-center" />

## Langsame Übertragungen und Timeouts während des Jobs

Die WebDAV-Schicht von Nextcloud ist bei Verzeichnissen mit vielen kleinen Dateien langsamer als S3-kompatible Backends. Wenn ein Synchronisationsjob bei großen Ordnern zu einem Timeout führt oder stockt, beginnen Sie mit einem **Testlauf**, um die Gesamtzahl der betroffenen Dateien zu ermitteln. Reduzieren Sie bei Verzeichnissen mit zehntausenden kleinen Dateien die Anzahl der gleichzeitigen Übertragungen in den **erweiterten Einstellungen** und erhöhen Sie die **Anzahl der Wiederholungsversuche**, um dem Server zwischen den Batches mehr Zeit zur Erholung zu geben.

Wenden Sie in Schritt 3 des Synchronisationsassistenten Filter für Dateigröße und -alter an, um große Jobs in kleinere Batches aufzuteilen: Synchronisieren Sie zunächst Dateien, die in den letzten 30 Tagen geändert wurden, und führen Sie ältere Dateien anschließend separat aus. So bleibt jeder Lauf in einem überschaubaren Rahmen, und die Wahrscheinlichkeit sinkt, dass ein einzelner Timeout eine stundenlange Übertragung abbricht.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Nextcloud sync job after adjusting transfer settings in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Öffnen Sie nach jeder fehlgeschlagenen Nextcloud-Synchronisation das **Log-Tab** und notieren Sie den HTTP-Fehlercode, bevor Sie etwas ändern.
3. Bei 401-Fehlern: Erstellen Sie in den Nextcloud-Einstellungen ein neues App-Passwort und aktualisieren Sie die Anmeldedaten Ihres Remotes.
4. Bei 423-Fehlern: Verschieben Sie den Job auf Zeiten außerhalb der Spitzenlast und reduzieren Sie die parallelen Übertragungen in den erweiterten Einstellungen.

Wer zuerst den Fehlercode liest, macht aus der Nextcloud-Fehlerbehebung kein Rätselraten mehr, sondern eine vorhersehbare Fünf-Minuten-Lösung.

---

**Weiterführende Anleitungen:**

- [Nextcloud verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Nextcloud mit Google Drive synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-google-drive-rcloneview)
- [WebDAV-Verbindungs- und Authentifizierungsfehler mit RcloneView beheben](https://rcloneview.com/support/blog/fix-webdav-connection-authentication-errors-rcloneview)

<CloudSupportGrid />
