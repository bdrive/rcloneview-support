---
slug: fix-synology-nas-detection-connection-errors-rcloneview
title: "Synology NAS-Erkennungs- und Verbindungsfehler beheben — Zuverlässige Backups mit RcloneView"
authors:
  - casey
description: "Beheben Sie Fehler bei der automatischen Erkennung und Verbindung von Synology NAS in RcloneView, mit Lösungen für die lokale Netzwerkerkennung und manuelle Einrichtung."
keywords:
  - Synology NAS RcloneView
  - Synology Autoerkennungsfehler
  - RcloneView NAS-Verbindung
  - NAS wird nicht erkannt beheben
  - Synology Cloud-Backup
  - NAS lokaler Netzwerkspeicher
  - RcloneView Fehlerbehebung
  - Synology SMB-Einbindung
  - lokale Speichersynchronisation
tags:
  - RcloneView
  - troubleshooting
  - synology
  - nas
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology NAS-Erkennungs- und Verbindungsfehler beheben — Zuverlässige Backups mit RcloneView

> Wenn RcloneView Ihr Synology im lokalen Netzwerk nicht findet, liegt die Ursache meist an einer Einstellung, nicht an einem defekten NAS.

RcloneView kann ein Synology NAS im lokalen Netzwerk automatisch erkennen, doch die Autoerkennung hängt nicht nur davon ab, ob das NAS eingeschaltet ist, sondern auch von der Netzwerksichtbarkeit. Ein Fotostudio, das nachts 2 TB RAW-Dateien sichert, kann ein ganzes Backup-Fenster verlieren, wenn ein NAS plötzlich nicht mehr im Explorer erscheint. Diese Anleitung behandelt die häufigsten Ursachen für Synology-Erkennungs- und Verbindungsfehler und wie Sie diese in RcloneView jeweils beheben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum die Autoerkennung fehlschlägt

Die Synology-Autoerkennung von RcloneView durchsucht das lokale Netzwerksegment, mit dem Ihr Rechner verbunden ist. Befindet sich das NAS hinter einem VLAN, einem anderen Subnetz oder einem VPN-Tunnel, erreicht der Broadcast es nicht, und das NAS erscheint nicht automatisch — das ist eine Einschränkung der Netzwerktopologie, kein Fehler von RcloneView. Prüfen Sie zunächst, ob die Einstellung selbst aktiviert ist: Settings-Tab > General > Auto-detect Synology NAS muss aktiviert sein, da es sich um einen Schalter handelt, der nach einer Neuinstallation leicht ausgeschaltet bleibt.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS-Autoerkennungsschalter in den RcloneView-Einstellungen" class="img-large img-center" />

Ist der Schalter aktiviert und die Erkennung schlägt weiterhin fehl, prüfen Sie, ob sich sowohl der Client-Rechner als auch das NAS im selben physischen oder virtuellen Netzwerksegment befinden. Unternehmensnetzwerke mit aktivierter Client-Isolation am WLAN-Access-Point blockieren die Geräteerkennung untereinander vollständig, selbst wenn beide Geräte als „verbunden" angezeigt werden.

## Manuelle Verbindung, wenn die Autoerkennung das NAS nicht erreicht

Wenn die Autoerkennung nicht praktikabel ist — bei Außenstellen, segmentierten Netzwerken oder NAS-Geräten in einem anderen VLAN — verbinden Sie sich manuell, statt die Erkennung zu debuggen. Fügen Sie das Synology-Gerät im Remote Manager direkt über seine IP-Adresse oder seinen Hostnamen als SFTP- oder SMB/CIFS-Remote hinzu und umgehen Sie so den lokalen Netzwerk-Scan vollständig.

<img src="/support/images/en/blog/new-remote.png" alt="Manuelles Hinzufügen eines Synology NAS als SFTP-Remote" class="img-large img-center" />

Dieser manuelle Weg löst auch das häufigste sekundäre Problem: Verbindungs-Timeouts, die wie Erkennungsfehler aussehen, aber tatsächlich Authentifizierungsprobleme sind. Prüfen Sie erneut, ob der SSH- oder SMB-Dienst des NAS in der eigenen Systemsteuerung von Synology aktiviert ist — RcloneView kann sich nicht mit einem Dienst verbinden, den das NAS selbst nicht ausführt.

## Verbindung prüfen und Backups automatisieren

Sobald der Remote hinzugefügt ist, verwenden Sie Test Connection vor dem Speichern, um Zugangsdaten und Erreichbarkeit in einem Schritt zu bestätigen, statt einen Fehler mitten in der Übertragung zu entdecken. RcloneView bindet ein und synchronisiert über 90 Anbieter aus einem einzigen Fenster heraus, auf Windows, macOS und Linux — sobald das Synology-Gerät verbunden ist, erscheint es im selben Explorer wie Ihre Cloud-Remotes, ohne separate App.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job-Verlauf mit einem abgeschlossenen Synology-Backup-Lauf" class="img-large img-center" />

Erstellen Sie anschließend einen Synchronisationsjob, der das NAS auf ein Cloud-Ziel spiegelt, und prüfen Sie nach dem ersten Lauf den Job-Verlauf — ein Job, der mit null übertragenen Dateien abgeschlossen wird, bedeutet meist einen falschen Quellpfad, nicht eine unterbrochene Verbindung.

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktivieren Sie Auto-detect Synology NAS in den Settings, oder verbinden Sie sich manuell per SFTP/SMB über die IP-Adresse des NAS.
3. Führen Sie Test Connection aus, bevor Sie den Remote speichern.
4. Richten Sie einen Synchronisationsjob zu einem Cloud-Ziel ein und bestätigen Sie die Übertragung im Job-Verlauf.

Ein NAS, das zuverlässig eine Verbindung herstellt, ist die fünf Minuten Netzwerk-Fehlerbehebung wert — automatisierte Backups schützen Sie nur, wenn sie tatsächlich laufen.

---

**Verwandte Anleitungen:**

- [Synology ohne Datenverlust mit Google Drive synchronisieren](https://rcloneview.com/support/blog/sync-synology-google-drive-without-data-loss)
- [Synology mit RcloneView in der Cloud sichern](https://rcloneview.com/support/blog/synology-to-cloud-backup-with-rcloneview)
- [SMB/Windows-Netzwerkfreigabe-Einbindungsfehler beheben — RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)

<CloudSupportGrid />
