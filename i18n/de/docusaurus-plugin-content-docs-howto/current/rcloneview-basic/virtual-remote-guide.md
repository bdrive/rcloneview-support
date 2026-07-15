---
sidebar_position: 15
description: "Verstehen Sie virtuelle Remotes in RcloneView und erfahren Sie, wie Sie Alias, Crypt, Combine, Union und andere virtuelle Ebenen für schnellere, sicherere Cloud-Workflows hinzufügen."
keywords:
  - rcloneview
  - virtual remote
  - alias
  - crypt
  - union
  - combine
  - cache
  - chunker
  - hasher
  - compress
tags:
  - RcloneView
  - virtual-remote
  - remote-storage
  - encryption
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Überblick über virtuelle Remotes und Einrichtung

Virtuelle Remotes fügen funktionale Ebenen über bestehende Cloud-Remotes hinzu. Sie speichern selbst keine Daten, sondern machen Ihre vorhandenen Remotes komfortabler, schneller, sicherer oder flexibler.

---

## Was ist ein virtuelles Remote?

Ein virtuelles Remote ist eine Funktionsebene, die:

- bestehende Remotes erweitert, ohne Daten zu verschieben.
- den Speicher im ursprünglichen Remote belässt und dabei Komfort hinzufügt.
- bei schnellerem Zugriff, Datenschutz oder einheitlichen Ansichten hilft.

---

## Arten von virtuellen Remotes

RcloneView bietet neun Typen virtueller Remotes:

1. **Alias**  
   Verknüpfung, um direkt zu einem bestimmten Cloud-Ordner zu springen.  
   Beispiel: Setzen Sie ein Lesezeichen für einen tief verschachtelten Google-Drive-Pfad für sofortigen Zugriff.  
   👉 Siehe: [Alias-Remote-Leitfaden](/howto/remote-storage-connection-settings/alias-remote)

2. **Crypt**  
   Verschlüsselt Dateinamen, Inhalte und Ordner zum Schutz der Privatsphäre.  
   👉 Siehe: [Crypt-Remote-Leitfaden](/howto/remote-storage-connection-settings/crypt-remote)

3. **Memory**  
   Speichert Daten im RAM für ultraschnelle, temporäre Nutzung; wird beim Schließen gelöscht.

4. **Cache**  
   Beschleunigt langsame Remotes durch Caching; schnellere wiederholte Lesevorgänge und Streaming.

5. **Chunker**  
   Teilt große Dateien in Blöcke auf, um Größenbeschränkungen des Dienstes zu umgehen und die Stabilität zu verbessern.

6. **Combine**  
   Zeigt mehrere Ordner als separate Unterordner unter einem Remote an.  
   👉 Siehe: [Combine-Remote-Leitfaden](/howto/remote-storage-connection-settings/combine-remote)

7. **Union**  
   Führt mehrere Ordner zu einer einheitlichen Ansicht zusammen.  
   👉 Siehe: [Union-Remote-Leitfaden](/howto/remote-storage-connection-settings/union-remote)

8. **Hasher**  
   Fügt Hashing hinzu, wo das Backend dies nicht unterstützt; nützlich für Integritätsprüfungen.

9. **Compress**  
   Komprimiert Dateien vor dem Hochladen, um Speicherplatz zu sparen.

---

## So fügen Sie ein virtuelles Remote hinzu

Alle virtuellen Remotes werden über **New Remote > Virtual** erstellt.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-virtual.png" alt="add virtual remote" class="img-large img-center" />

### Schritt 1 — New Remote öffnen

- Über das obere Menü: **`Remote` > `New Remote`**.
- Wählen Sie den Tab **`Virtual`**, um alle Typen virtueller Remotes anzuzeigen.

### Schritt 2 — Typ des virtuellen Remotes wählen

Jeder Typ hat eigene erforderliche Felder. Beispiele:

- **Alias**: Name + Zielordner.
- **Crypt**: Verschlüsselungspasswort + Zielordner.
- **Union**: mehrere `Remote:Path`-Upstreams.
- **Combine**: Verzeichnisbezeichnungen + Liste der Remote-Pfade.
- **Chunker**: Quell-Remote + Chunk-Einstellungen.

RcloneView führt Sie durch die erforderlichen Eingaben für jeden Typ.

### Schritt 3 — Das virtuelle Remote verwenden

Nach der Erstellung erscheint das virtuelle Remote wie jedes andere Remote in:

- **Remote Manager**
- **Explorer**-Dateibrowser
- **Sync / Compare / Job**-Dialogen

Denken Sie daran: Virtuelle Remotes sind Funktionsebenen. Die tatsächlichen Dateien bleiben in den zugrunde liegenden Remote-Pfaden.

---

## Wann virtuelle Remotes verwenden

| Bedarf                                     | Empfohlenes virtuelles Remote |
| ------------------------------------------ | ------------------------------ |
| Cloud-Sicherheit stärken                   | Crypt                          |
| Mehrere Ordner zusammen anzeigen           | Union                          |
| Komplexe Pfade als Lesezeichen speichern   | Alias                          |
| Komplexe Projekte organisieren             | Combine                        |
| Sehr große Dateien hochladen               | Chunker                        |
| Wiederholte Lesevorgänge beschleunigen     | Cache                          |
| Datenintegrität überprüfen                 | Hasher                         |
| Speicherplatz durch Kompression sparen     | Compress                       |

---

## Kurzübersicht

| Virtuelles Remote | Funktion                                        |
| ------------------ | ------------------------------------------------ |
| Alias               | Ordnerverknüpfung                                 |
| Crypt               | Verschlüsselter Speicher                          |
| Memory              | Temporärer RAM-basierter Speicher                 |
| Cache               | Geschwindigkeitssteigerung durch Caching          |
| Chunker             | Zerlegt große Dateien für den Upload              |
| Combine             | Gruppiert mehrere Ordner als separate Ansichten   |
| Union               | Führt mehrere Ordner zu einer Ansicht zusammen    |
| Hasher              | Fügt Hashing für Integritätsprüfungen hinzu       |
| Compress            | Komprimiert Dateien vor dem Hochladen             |

Virtuelle Remotes machen Cloud-Workflows leistungsfähiger und flexibler. In RcloneView können Sie diese Funktionen mit nur wenigen Klicks aktivieren – ohne komplizierte Einrichtung.
