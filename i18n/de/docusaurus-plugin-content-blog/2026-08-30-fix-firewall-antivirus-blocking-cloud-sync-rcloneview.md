---
slug: fix-firewall-antivirus-blocking-cloud-sync-rcloneview
title: "Firewall und Antivirus, die Cloud-Synchronisation blockieren, beheben — Verbindungsfehler mit RcloneView lösen"
authors:
  - robin
description: "Diagnostizieren und beheben Sie Cloud-Synchronisation-Jobs, die ins Stocken geraten oder fehlschlagen, weil eine Firewall, ein Antivirenprogramm oder ein Endpoint-Security-Tool die Verbindungen von RcloneView blockiert."
keywords:
  - Firewall blockiert Cloud-Synchronisation
  - Antivirus blockiert rclone
  - RcloneView Verbindung blockiert
  - Cloud-Synchronisation hängt Firewall
  - rclone Netzwerkfehler beheben
  - Endpoint-Schutz Cloud-Synchronisation
  - RcloneView in Firewall zulassen
  - Cloud-Backup Verbindung fehlgeschlagen
  - VPN Cloud-Synchronisation Probleme
  - rclone RC API blockiert
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Firewall und Antivirus, die Cloud-Synchronisation blockieren, beheben — Verbindungsfehler mit RcloneView lösen

> Wenn ein Synchronisationsjob bei 0 % hängen bleibt oder mit einem generischen Verbindungsfehler fehlschlägt, ist oft die lokale Sicherheitssoftware die eigentliche Ursache — nicht der Cloud-Anbieter.

Ein Synchronisationsjob, der nie startet, bei 0 % übertragen hängen bleibt oder mit einer vagen Timeout-Meldung abbricht, deutet nicht immer auf eine fehlerhafte Remote-Konfiguration hin. Sowohl auf verwalteten Arbeitsstationen als auch in abgeriegelten Heimnetzwerken unterbrechen Firewalls, Antivirenprogramme und Endpoint-Protection-Agenten routinemäßig die ausgehenden Verbindungen, die RcloneView benötigt — sowohl zur API des Cloud-Anbieters als auch zum eigenen lokalen, eingebetteten rclone-Prozess —, und der Fehler sieht identisch aus wie ein echter Netzwerkausfall. RcloneView läuft vollständig auf Ihrem lokalen Rechner, sodass jede dieser Verbindungen von einem Prozess ausgeht, den Sie direkt überprüfen und auf eine Whitelist setzen können.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Eine Firewall- oder Antivirus-Blockade erkennen

Die verräterischen Anzeichen sind Konsistenz und Unmittelbarkeit: Der Job schlägt innerhalb von ein bis zwei Sekunden nach dem Start fehl, statt nach einem langsamen Kampf; derselbe Job funktioniert in einem anderen Netzwerk einwandfrei; oder ein brandneuer Remote scheitert bereits am Verbindungstest, bevor er den Anbieter überhaupt erreicht. Das eingebettete rclone von RcloneView lauscht lokal auf `127.0.0.1:5582`, und Antivirenprogramme, die Loopback-Datenverkehr untersuchen oder nicht erkannte ausführbare Dateien am Öffnen von Netzwerk-Sockets hindern, können diese Verbindung stillschweigend kappen, obwohl die App selbst normal zu laufen scheint.

<img src="/support/images/en/blog/new-remote.png" alt="Ein Remote-Verbindungstest, der wegen einer blockierten Verbindung sofort fehlschlägt" class="img-large img-center" />

Wenn Sie sich statt mit dem eingebetteten rclone mit einer externen rclone-Instanz verbinden, gilt dieselbe Logik für Port 5572 — Unternehmens-Firewalls, die nur Datenverkehr auf Standard-Webports (80/443) zulassen, verwerfen diesen still und leise.

## Die blockierte Verbindung isolieren

Starten Sie eine manuelle Übertragung und beobachten Sie den Reiter Transferring: Ein Job, der dauerhaft 0 B/s anzeigt, ohne Fehler und ohne Fortschritt, bedeutet meist, dass die Verbindung zu den Servern des Cloud-Anbieters ausgehend gefiltert wird, nicht dass der Anbieter down ist. Wenn Sie das rclone-Logging in den Einstellungen auf DEBUG-Ebene aktivieren und das Problem reproduzieren, erscheint häufig ein Eintrag mit `connection reset` oder `i/o timeout`, der auf den genauen blockierten Host hinweist.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ein Synchronisationsjob, der wegen einer blockierten Netzwerkverbindung ins Stocken gerät" class="img-large img-center" />

Auch Job History ist hier hilfreich: Jobs, die bei unterschiedlichen Remotes konsequent nach nahezu derselben verstrichenen Zeit mit „Errored" enden, deuten eher auf eine lokale Netzwerkrichtlinie als auf ein anbieterspezifisches Problem hin.

## RcloneView in der Sicherheitssoftware zulassen

Sobald Sie die Blockade bestätigt haben, fügen Sie RcloneView (und die mitgelieferte rclone-Binärdatei) als zulässige Anwendung in Ihren Firewall- und Antivirus-Regeln hinzu, statt den Schutz vollständig zu deaktivieren. Unter Windows bedeutet das eine Eingangs-/Ausgangsregel in der Windows Defender Firewall oder Ihrer Drittanbieter-Suite; unter macOS die Erteilung des Netzwerkzugriffs unter Datenschutz & Sicherheit, falls Sie dazu aufgefordert werden; unter Linux die Überprüfung von `ufw` oder `iptables` zusammen mit jedem zentral von Ihrer Organisation verwalteten Endpoint-Agenten. Wenn Sie ein Unternehmens-VPN oder einen Proxy nutzen, stellen Sie sicher, dass die API-Domains des Cloud-Anbieters auch dort zugelassen sind — eine fehlerhafte Split-Tunnel-Konfiguration erzeugt dieselben stockenden Übertragungssymptome wie eine lokale Firewall-Blockade.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Eine Cloud-Synchronisation, die nach dem Entfernen einer Firewall-Blockade normal überträgt" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html), falls noch nicht geschehen.
2. Reproduzieren Sie den Fehler mit aktiviertem rclone-Logging auf DEBUG-Ebene und notieren Sie den genauen Host oder Port im Fehler.
3. Fügen Sie RcloneView und seinen eingebetteten rclone-Prozess als zulässige Anwendungen in Ihren Firewall- und Antivirus-Einstellungen hinzu.
4. Führen Sie den Job erneut aus und bestätigen Sie, dass im Reiter Transferring nun ein echter Übertragungsfortschritt angezeigt wird.

Ein einziger Whitelist-Eintrag löst meist, was wie ein hartnäckiges, unerklärliches Synchronisationsproblem aussieht — es lohnt sich, dies auszuschließen, bevor Sie den Cloud-Anbieter oder die Remote-Konfiguration verdächtigen.

---

**Verwandte Anleitungen:**

- [Probleme mit Proxy- und VPN-Cloud-Verbindungen mit RcloneView beheben](https://rcloneview.com/support/blog/fix-proxy-vpn-cloud-connection-issues-rcloneview)
- [Timeout-Fehler bei der Cloud-Synchronisation mit RcloneView beheben](https://rcloneview.com/support/blog/fix-cloud-sync-timeout-errors-rcloneview)
- [SSL/TLS-Zertifikatsfehler bei der Cloud-Synchronisation mit RcloneView beheben](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
