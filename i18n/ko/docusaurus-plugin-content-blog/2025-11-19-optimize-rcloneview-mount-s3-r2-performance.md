---
slug: optimize-rcloneview-mount-s3-r2-performance
title: "S3와 Cloudflare R2를 위한 RcloneView 마운트 성능 최적화"
authors:
  - tayson
description: 미디어 서버와 분석 작업이 빠르고 안정적으로 동작하도록, 올바른 캐시 모드와 청크 크기, 동시성 설정으로 Amazon S3와 Cloudflare R2용 RcloneView 마운트를 튜닝하세요.
keywords:
  - rcloneview
  - rclone mount
  - s3 mount performance
  - cloudflare r2 mount
  - vfs cache
  - rclone tuning
  - multi-thread streams
  - s3 chunk size
tags:
  - mount
  - cloudflare-r2
  - aws-s3
  - performance
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# S3와 Cloudflare R2를 위한 RcloneView 마운트 성능 최적화

> CLI 플래그를 직접 편집하지 않고도 S3 호환 스토리지용 RcloneView 마운트 설정을 튜닝하여 더 매끄러운 재생과 더 빠른 읽기를 경험하세요.

S3 버킷이나 Cloudflare R2를 워크스테이션, NAS, 미디어 서버에 마운트하면 즉시 접근이 가능해지지만, 기본 설정은 처리량을 제한할 수 있습니다. RcloneView에서 몇 가지 핵심 설정을 조정하면 지연 시간을 줄이고 버퍼링을 낮추면서 AWS와 R2 전반에서 비용을 예측 가능하게 유지할 수 있습니다.

<!-- truncate -->

**주요 키워드:** *rclone mount*, *S3 mount performance*, *Cloudflare R2*, *VFS cache*, *multi-thread streams*.

---

## 마운트 튜닝이 중요한 이유

- 끊김 없는 스트리밍: 미디어 서버와 BI 도구는 버퍼링을 피하기 위해 일관된 읽기 선행(read-ahead)과 캐싱이 필요합니다.
- API 과부하 방지: 동시성을 제어하면 S3 호환 엔드포인트에서 429/503 스로틀링을 예방할 수 있습니다.
- 이그레스 비용과 재요청 절감: 더 똑똑한 캐싱은 중복 GET과 네트워크 트래픽을 줄입니다.
- 안전한 쓰기 유지: 올바른 캐시 모드는 연결이 끊겼을 때 데이터베이스 손상이나 업로드 중단을 방지합니다.

---

## 사전 준비 사항 및 빠른 점검

1. 위치와 지연 시간: 사용자와 가장 가까운 AWS 리전을 선택하세요. R2의 경우 RTT를 최소화하기 위해 가장 가까운 Cloudflare 위치를 선택하세요.
2. 네트워크 경로: VPN/방화벽 규칙이 과도한 IDS 스로틀링 없이 지속적인 HTTPS(443) 트래픽을 허용하는지 확인하세요.
3. RcloneView의 자격 증명: Amazon S3와 Cloudflare R2용 리모트를 추가하세요(`https://<account>.r2.cloudflarestorage.com`과 같은 S3 호환 엔드포인트).
   - 복습이 필요하신가요? [S3 리모트 추가 방법](/howto/remote-storage-connection-settings/s3)과 [Cloudflare R2 API 자격 증명을 얻는 방법](/howto/cloud-storage-setting/cloudflare-r2-credential)을 참고하세요.
4. 워크로드 이해: 미디어 스트리밍은 읽기 선행에 유리하고, 분석 작업은 병렬 읽기에 유리하며, 백업 대상은 더 안전한 쓰기 캐싱이 필요할 수 있습니다.

---

## 1단계 - RcloneView에서 마운트 생성

1. **RcloneView** -> **Mounts** -> **New Mount**를 엽니다.
2. 리모트(S3 또는 R2)와 로컬 마운트 경로를 선택합니다.
3. 재부팅 시 서비스(Plex/Jellyfin, BI 도구)를 실행한다면 **Auto-start on launch**를 켭니다.
4. 저장한 다음, 마운트를 한 번 시작하여 OS 파일 탐색기에 표시되는지 확인합니다.

> 팁: R2의 경우, 지역 지연 시간을 낮게 유지하려면 고급 설정에서 올바른 엔드포인트를 설정하세요.

---

## 2단계 - 올바른 VFS 캐시 모드 설정

| 사용 사례 | 권장 `--vfs-cache-mode` | 이유 |
| --- | --- | --- |
| 미디어 재생 / BI 대시보드 | `writes` | 다운로드와 임시 쓰기를 버퍼링하여 부분 업데이트에 더 안전함 |
| 사진/비디오 편집 | `full` | 업로드 전에 임의 읽기/쓰기가 로컬 캐시를 거치도록 보장함 |
| 단순 읽기 전용 탐색 | `off` (기본값) | 파일을 거의 수정하지 않을 때 오버헤드가 가장 낮음 |

마운트 모달의 추가 캐시 설정:

- 캐시 최대 크기: SSD에서 10-50GB로 시작하고, 대용량 라이브러리를 스트리밍한다면 늘리세요.
- `--vfs-read-ahead`: 플레이어가 멈춤 없이 미리 버퍼링하도록 32M-128M로 설정하세요.
- `--buffer-size`: 파일당 8M-32M은 고지연 링크에서 TCP 윈도우를 가득 채워줍니다.
- `--dir-cache-time`: 깊은 버킷 구조에서 LIST 호출을 줄이려면 5m-30m로 설정하고, 업데이트가 계속 반영되도록 `--poll-interval`(예: 30s)과 함께 사용하세요.

---

## 3단계 - 동시성과 멀티파트 튜닝으로 처리량 확보

마운트에서도 rclone은 백엔드 튜닝 플래그를 그대로 적용합니다:

- `--multi-thread-streams`: 고지연 경로에서 단일 파일 읽기를 개선합니다(4-8로 시도).
- `--transfers`: 캐시에서의 동시 업로드를 제어합니다. 프로바이더 스로틀링을 피하려면 4-8로 시작하세요.
- S3 청크 크기: 대용량 파일의 왕복 횟수를 줄이려면 `--s3-chunk-size 64M`(1Gbps 이상이면 128M)로 설정하세요.
- S3 업로드 동시성: `--s3-upload-concurrency 4`가 안전한 기본값입니다. CPU와 네트워크 여유가 있으면 늘리세요.
- 체크섬: 순수하게 속도만 최적화하려는 중요하지 않은 데이터가 아니라면, 무결성을 위해 `--s3-disable-checksum=false`를 유지하세요.
- R2 멀티파트: 더 큰 자산에 멀티파트 업로드를 강제하려면 `--chunk-size 64M`와 `--upload-cutoff 64M`을 사용하세요.

속도 제한에 주의하세요. 429/503 응답이 보이면 전송량을 25% 줄이고 `--retries-sleep 10s`를 추가하세요.

---

## 4단계 - 장시간 세션에서 마운트 안정성 유지

- 재시도와 백오프: `--retries 10`과 `--low-level-retries 20`을 설정하고, `--retries-sleep 5s`와 함께 사용하세요.
- 타임아웃 안전성: 불안정한 Wi-Fi 환경에서는 긴 읽기가 살아남도록 `--contimeout 15s`와 `--timeout 5m`을 추가하세요.
- 쓰기 안전성: 공유 편집 워크로드에서는, 절대 변경되지 않아야 하는 아카이브에 대해서만 `--immutable`을 활성화하세요.
- 로깅: RcloneView 마운트에서 상세 로그를 활성화하고, 동시성을 조정할 때 로그를 실시간으로 확인하여 스로틀링을 파악하세요.
- 상태 점검: S3와 R2 간 무결성 검증을 위해 매일 밤 `--size-only` 또는 `--checksum` 작업을 예약하세요.

---

## 5단계 - 일반적인 시나리오별 프로필

### R2/S3에서 Plex 또는 Jellyfin으로 미디어 스트리밍
- `--vfs-cache-mode writes`
- `--vfs-read-ahead 96M`, `--buffer-size 16M`
- `--multi-thread-streams 6`
- R2/S3를 안정적으로 유지하기 위해 `--transfers 4`로 제한하고, 피크 시간대에는 `--bwlimit 80M`을 활성화하세요.

### 마운트된 parquet/CSV에서의 BI 대시보드 또는 데이터 사이언스 노트북
- 임의 읽기를 위한 `--vfs-cache-mode full`
- `--multi-thread-streams 8`, `--transfers 6`
- 캐시에서 빠른 스필 쓰기를 위한 더 큰 `--s3-chunk-size 128M`과 `--s3-upload-concurrency 6`.

### 백업 드롭 타깃(NAS에서 S3/R2로)
- `--vfs-cache-mode writes`, `--dir-cache-time 30m`
- 보수적인 `--transfers 4`, `--checkers 8`
- 버킷 정책에서 요구한다면 서버 측 암호화를 켜고, 체크섬은 활성화된 상태로 유지하세요.

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 문제 해결 체크리스트

1. 큰 폴더 탐색이 느린가요? 프로바이더가 허용하면 `--fast-list`를 추가하고 `--dir-cache-time`을 늘리세요.
2. 버퍼링이 계속되나요? `--vfs-read-ahead`를 올리고 SSD 캐시 공간을 확인하며 OS 디스크 큐를 살펴보세요.
3. 스로틀링 오류가 발생하나요? `--transfers`와 `--multi-thread-streams`를 낮추고, 업무 시간대에는 `--bwlimit`을 추가하세요.
4. 업로드가 99%에서 멈추나요? `--timeout`을 늘리고, 멀티파트 청크 크기가 프로바이더 최소 요건(S3는 5MB, R2는 5-50MB)을 충족하는지 확인하세요.
5. 앱에서 오래된 메타데이터가 보이나요? `--poll-interval`을 줄이고 마운트를 재시작하여 디렉터리 캐시를 갱신하세요.

---

## FAQ

**Q. S3와 R2에 각각 다른 마운트가 필요한가요?**
**A.** 각 리모트마다 별도의 마운트를 만드세요. RcloneView 내에서 두 마운트를 모두 활성 상태로 유지하며 서로 간에 드래그 앤 드롭할 수 있습니다.

**Q. 캐시 크기가 비용에 영향을 미치나요?**
**A.** 네 - 캐시가 클수록 반복적인 GET이 줄어들어 특히 요청 단위 과금 모델인 R2에서 이그레스와 요청 비용을 낮출 수 있습니다.

**Q. 읽기 전용 워크로드와 읽기/쓰기 워크로드를 섞어서 사용할 수 있나요?**
**A.** 두 개의 마운트를 사용하세요. 미디어 재생용으로는 읽기 전용(`--read-only`) 마운트를, 편집자를 위해서는 읽기/쓰기 마운트를 사용하면 권한과 캐싱을 예측 가능하게 유지할 수 있습니다.

**Q. 시간에 따른 성능은 어떻게 모니터링하나요?**
**A.** 매주 마운트 로그와 Job History를 내보내고, 설정에 태그를 붙이며(예: `[MountTest] R2 64M/6threads`), 팀을 위해 효과적인 설정을 정리한 간단한 운영 가이드를 유지하세요.

---

잘 튜닝된 마운트는 로컬처럼 느껴집니다. 캐시, 동시성, 로깅을 위한 RcloneView의 GUI 컨트롤을 활용하면 셸 스크립트 없이도 S3와 R2를 온프레미스 스토리지처럼 성능 좋게 유지할 수 있습니다.

<CloudSupportGrid />
