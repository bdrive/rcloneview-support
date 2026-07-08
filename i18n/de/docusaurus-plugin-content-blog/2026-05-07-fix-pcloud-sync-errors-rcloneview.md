---
slug: fix-pcloud-sync-errors-rcloneview
title: "pCloud-Synchronisationsfehler beheben — Häufige pCloud-Probleme mit RcloneView lösen"
authors:
  - tayson
description: "Beheben Sie häufige pCloud-Synchronisationsfehler in RcloneView — lösen Sie Probleme mit abgelaufenen OAuth-Token, API-Ratenlimits, Serverregion-Abweichungen und langsamen Uploads."
keywords:
  - pCloud sync errors
  - RcloneView pCloud
  - pCloud troubleshooting
  - OAuth token expired
  - pCloud Europe US server
  - pCloud API rate limit
  - cloud sync fix
  - rclone pCloud
tags:
  - RcloneView
  - pcloud
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud-Synchronisationsfehler beheben — Häufige pCloud-Probleme mit RcloneView lösen

> pCloud-Synchronisationsfehler sind fast immer auf eines von wenigen bekannten Problemen zurückzuführen — hier erfahren Sie, wie Sie die häufigsten davon in RcloneView diagnostizieren und beheben.

pCloud ist ein auf Datenschutz ausgerichteter Cloud-Speicher-Anbieter mit Servern sowohl in den USA als auch in Europa, und diese regionale Aufteilung ist die Hauptursache vieler rätselhafter Synchronisationsfehler. In Kombination mit abgelaufenen OAuth-Token und API-Ratenlimits kann pCloud verwirrende Fehler erzeugen, die scheinbar nichts mit dem eigentlichen Problem zu tun haben. Diese Anleitung führt durch die häufigsten pCloud-Probleme in RcloneView und zeigt, wie sich jedes davon beheben lässt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ablauf des OAuth-Tokens und erneute Autorisierung

pCloud verwendet OAuth zur Authentifizierung, das heißt, RcloneView hält ein Zugriffstoken, das regelmäßig abläuft. Wenn das Token abläuft, schlagen Synchronisationsaufgaben mit Authentifizierungsfehlern wie `401 Unauthorized` oder `invalid_token` fehl. Die Lösung ist einfach: Gehen Sie zu Ihrer Remote-Liste in RcloneView, wählen Sie den pCloud-Remote aus und wählen Sie **Erneut autorisieren** (oder löschen und erstellen Sie den Remote neu). Dadurch wird ein neuer OAuth-Ablauf in Ihrem Browser ausgelöst, der ein neues gültiges Token ausstellt.

Um wiederholte Unterbrechungen durch erneute Autorisierung zu vermeiden, stellen Sie sicher, dass Ihr pCloud-Remote in RcloneView mit der korrekten Serverregion erstellt wurde (siehe unten). Eine falsche Region kann dazu führen, dass Token gültig erscheinen, bei tatsächlichen API-Aufrufen jedoch fehlschlagen — was identisch zum Ablauf des Tokens aussieht.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorizing a pCloud remote in RcloneView" class="img-large img-center" />

## Abweichung zwischen Europa- und US-Serverregion

Dies ist das häufigste pCloud-spezifische Problem. pCloud-Konten, die in Europa erstellt wurden, werden auf europäischen Servern (`eapi.pcloud.com`) gehostet, während US-Konten den standardmäßigen US-Endpunkt (`api.pcloud.com`) verwenden. Wenn Sie ein pCloud-Konto mit europäischer Region erstellt haben, RcloneView aber für die Verwendung des US-Endpunkts konfiguriert ist, schlägt jeder API-Aufruf fehl.

Achten Sie bei der Einrichtung eines pCloud-Remotes in RcloneView während der Konfiguration auf das Feld **Hostname** oder **API-Endpunkt**. Für europäische Konten setzen Sie dieses auf `eapi.pcloud.com`. Wenn Ihr Remote ohne Angabe dieses Wertes erstellt wurde, löschen Sie ihn und erstellen Sie ihn mit dem korrekten Hostnamen neu. Diese einzelne Korrektur behebt den Großteil der pCloud-Verbindungsfehler.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="pCloud remote configuration showing region endpoint in RcloneView" class="img-large img-center" />

## API-Ratenlimits und langsame Uploads

pCloud setzt API-Ratenlimits durch, insbesondere für Konten der kostenlosen Stufe. Wenn Sie diese Limits erreichen, erhält rclone Fehler wie `too many requests`, oder Übertragungen verlangsamen sich drastisch. RcloneView respektiert die integrierte Wiederholungslogik von rclone, Sie können diese aber weiter anpassen, indem Sie die Flags `--retries` und `--retries-sleep` in der Einstellung **Global Rclone Flags** anpassen.

Speziell bei langsamen Uploads hat die kostenlose Stufe von pCloud Bandbreitenbeschränkungen, die unabhängig von der Ratenbegrenzung bestehen. Erwägen Sie, große Synchronisationsaufgaben mithilfe von Filterregeln in kleinere Stapel aufzuteilen oder Aufgaben mit einem PLUS-Lizenzzeitplan außerhalb der Stoßzeiten zu planen. Wenn Uploads häufig eine Zeitüberschreitung erleiden, gibt das Hinzufügen von `--timeout 300s` zu Ihren globalen Flags den Übertragungen mehr Zeit zum Abschluss, bevor rclone sie als fehlgeschlagen betrachtet.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring pCloud transfer progress in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Wenn Sie Authentifizierungsfehler sehen, autorisieren Sie Ihren pCloud-Remote im Remote-Einstellungsbereich erneut.
3. Prüfen Sie, ob Ihr pCloud-Konto in der EU-Region liegt, und aktualisieren Sie den Endpunkt bei Bedarf auf `eapi.pcloud.com`.
4. Fügen Sie bei Ratenlimit-Fehlern `--retries 10 --retries-sleep 30s` zu den Global Rclone Flags in den Einstellungen hinzu.
5. Führen Sie vor jeder Synchronisation einen **Testlauf** durch, um zu bestätigen, dass der Remote erreichbar ist und die richtigen Dateien erfasst werden.

Die meisten pCloud-Synchronisationsprobleme in RcloneView lassen sich mit einem dieser Schritte lösen — allein die Korrektur des Regionen-Endpunkts macht den Großteil der gemeldeten Fehler aus.

---

**Verwandte Anleitungen:**

- [Koofr verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Proton Drive verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Abgelaufene Cloud-OAuth-Token und Aktualisierungsprobleme mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)

<CloudSupportGrid />
