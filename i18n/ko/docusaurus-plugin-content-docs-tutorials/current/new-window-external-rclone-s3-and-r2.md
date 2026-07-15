---
sidebar_position: 11
description: "EC2에서 실행되는 외부 Rclone 데몬을 활용해 AWS S3에서 Cloudflare R2로 대용량 파일을 고속으로 전송하는 방법을 알아보세요. RcloneView로 완벽하게 관리됩니다."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# AWS S3와 Cloudflare R2 간 EC2 외부 Rclone을 통한 고성능 파일 전송

현대의 팀들은 여러 개의 오브젝트 스토리지 플랫폼을 동시에 다루는 경우가 많으며, 대용량 데이터셋이 로컬 데스크톱을 거쳐 이동할 때 대역폭, 지연 시간, 송신(egress) 비용이 심각한 병목이 된다는 사실을 금방 깨닫게 됩니다. **Rclone**을 클라우드 인스턴스에서 직접 실행하고 이를 **RcloneView**로 제어하면, 무거운 트래픽을 클라우드의 고속 백본으로 밀어넣고 노트북은 데이터 경로에서 완전히 제외할 수 있습니다.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

아래 안내는 "EC2를 통한 AWS S3와 Google Drive 동기화" 가이드의 구성을 참고하여 S3 ↔ R2 시나리오에 맞게 확장한 것입니다. 다음을 진행하게 됩니다.

1. AWS EC2 서버에서 Rclone을 원격 제어 데몬(**rcd**)으로 실행합니다.
2. 별도의 RcloneView 창을 열어 해당 외부 Rclone에 연결합니다.
3. EC2에서 호스팅되는 Rclone 안에 AWS S3와 Cloudflare R2 리모트를 추가합니다.
4. 로컬 대역폭 제약 없이 전적으로 클라우드 간(cloud-to-cloud)으로 전송, 동기화 또는 작업을 예약합니다.

:::danger AWS 데이터 전송 비용
동일 가용 영역(Availability Zone) 내 트래픽은 무료이지만, 가용 영역 간 및 인터넷 송신에는 비용이 발생합니다(일반적으로 AZ 간 $0.02/GB, 인터넷 송신 $0.09/GB).
참고: [AWS 요금 – 데이터 전송](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **왜 외부 Rclone을 사용해야 할까요?**

| 로컬 내장 Rclone                                                                  | EC2의 외부 Rclone                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 트래픽 경로: **S3 → 로컬 PC → R2** — 이중 홉이며 가정용 업로드 속도에 의해 제한됨. | 트래픽 경로: **S3 → EC2 → R2** — 클라우드 백본 내 단일 홉으로, 종종 10-25 Gbit/s에 달함. |
| 가정용 ISP의 대역폭 제한이나 비대칭 대역폭이 대규모 마이그레이션을 느리게 만듦. | 훨씬 높은 처리량; 로컬 제한 없음. |
| 로컬 CPU와 RAM이 모든 바이트를 해싱해야 함. | CPU 부담을 클라우드 VM으로 오프로드; 필요에 따라 더 큰 인스턴스 크기를 선택 가능. |
| NAT/방화벽 문제가 발생할 수 있음. | 공용 IP와 개방된 5572 포트 사용(또는 SSH 터널링). |

## 파트 1. EC2에 Rclone 배포하기 (외부 Rclone)

1. **Ubuntu EC2 인스턴스를 실행합니다** (다중 스레드 업로드를 위해 t3.medium 이상 권장).
2. 보안 그룹에서 **TCP 5572 포트를 엽니다** (또는 SSH 터널을 사용합니다).
3. **Rclone을 설치합니다**:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. 기본 인증과 함께 **rcd 데몬을 실행합니다**:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    `--rc-addr` 플래그는 RcloneView가 호출할 수 있는 HTTP 엔드포인트를 노출합니다.
    
5. 노트북에서 **상태를 확인합니다**:
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    JSON `{}` 응답이 오면 데몬이 정상적으로 대기 중임을 확인한 것입니다.

👉 더 알아보기:  [AWS EC2 서버에서 Rclone을 실행하는 방법](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## 파트 2. 새 RcloneView 창 열기

연결을 체계적으로 관리하기 위해, RcloneView는 각 창이 자체 Rclone 엔진으로 동작하도록 지원합니다.

1. **RcloneView**를 실행합니다  
2. `Home` 메뉴에서 **`New Window`** 버튼을 클릭합니다. 
3. 새 애플리케이션 창이 열립니다. 이 인스턴스는 메인 창과 독립적이며 자체 연결 컨텍스트를 유지합니다.  

  📌 _다음 단계에서 이 창을 외부 Rclone(EC2)에 연결하게 됩니다._  

👉 더 알아보기: [New Window로 다중 Rclone 연결 사용하기](/howto/rcloneview-advanced/multi-window).

## 파트 3. EC2에서 호스팅되는 Rclone에 연결하기

**새로 열린 창**에서 다음 단계에 따라 EC2에서 호스팅되는 외부 Rclone에 연결합니다.

1. 새 창에서 **Settings → Connection Manager**를 엽니다.
2. **New Connection**을 클릭하고 양식을 작성합니다:

| 필드          | 값                              |
| -------------- | ---------------------------------- |
| Display Name   | `ec2-rclone`                       |
| Remote Address | `http://<EC2-IP or DNS-NAME>:5572` |
| Username       | `admin`                            |
| Password       | `admin`                            |

4. **`Test Connection`**을 클릭해 설정을 확인합니다.  
   연결 성공 응답이 표시되어야 합니다.  
5. 테스트를 통과하면 **`Save`**를 클릭한 뒤 **`Connect`**를 클릭합니다.  
6. 이제 **EC2에서 실행 중인 외부 Rclone 인스턴스**에 연결되었으며, 창 상단에 연결 상태가 표시됩니다.   

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## 파트 4. AWS S3 및 Cloudflare R2 리모트 추가하기 (외부 Rclone 경유)


### ➕ AWS S3 리모트 추가

1. **`Remote`** 탭으로 이동해 **`+ New Remote`**를 클릭합니다.
2. **`Provider`** 탭에서 **Amazon S3**를 선택합니다.
3. **`Options`** 탭에서:
   - `provider`를 `AWS`로 설정
   - **Access Key ID**와 **Secret Access Key**를 입력
   - Region과 endpoint는 별도로 커스터마이징하지 않는 한 기본값으로 두어도 됩니다
4. **Save**를 클릭해 설정을 완료합니다.

👉 더 알아보기:   
- [S3 리모트 추가 방법](/howto/remote-storage-connection-settings/s3)
- [AWS S3 Access 자격 증명 발급 방법](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ Cloudflare R2 리모트 추가

1. `Remote` 탭에서 다시 **`+ New Remote`**를 클릭합니다.
2. **`Provider`** 탭에서 **S3**를 선택합니다(맞습니다, 다시—R2는 S3 프로토콜을 사용합니다).
3. **`Options`** 탭에서:
   - `provider`를 `Cloudflare`로 설정
   - **Cloudflare R2 Access Key**와 **Secret Key**를 입력
   - `endpoint`를 `https://<accountid>.r2.cloudflarestorage.com`으로 설정
1. **Save**를 클릭해 R2 리모트 설정을 완료합니다.

👉 더 알아보기:   
- [S3 리모트 추가 방법](/howto/remote-storage-connection-settings/s3)
- [Cloudflare R2 Access 자격 증명 발급 방법](/howto/cloud-storage-setting/cloudflare-r2-credential)
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## 파트 5. AWS S3와 Cloudflare R2 간 파일 동기화

### 🔁 방법 A: Sync 또는 Job 사용

1. Explorer 창에서 동기화하려는 **Cloudflare R2** 폴더와 **AWS S3** 폴더를 선택합니다.
2. `home` 메뉴에서 **`Sync`** 버튼을 클릭합니다.
3. 동기화 옵션(단방향 또는 양방향)을 선택하고, 미리보기로 작업을 확인한 뒤 확정합니다.
4. RcloneView가 동기화를 실행하며 **`transfer`** 로그 탭에서 진행 상황을 표시합니다.

- 반복 또는 예약 전송의 경우:
  1. Sync 모달에서 **`Save to Jobs`**를 클릭하거나, **`Job Manager`** → **`Add Job`**을 엽니다.
  2. 소스, 대상, 옵션을 구성합니다.
  3. 저장한 뒤 수동으로 실행하거나 일정을 설정합니다.

👉 더 알아보기:
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ 방법 B: 반복 동기화 작업 예약

1. Explorer 창에서 계속 동기화 상태를 유지하려는 **Cloudflare R2**와 **AWS S3** 폴더를 선택합니다.
2. **`Home`** 또는 **`Remote`** 메뉴에서 **`Job Manager`**를 열고 **`Add Job`**을 클릭합니다.
3. 소스와 대상을 확인합니다.
4. 일정 편집기를 사용해 작업 실행 시점을 설정합니다. 저장 전 일정을 미리 확인하세요.
5. 저장한 뒤 예약된 작업을 활성화합니다.

RcloneView는 지정한 시간에 동기화를 실행합니다. **`Job History`**에서 실행 세부 정보와 로그를 확인할 수 있으며, 완료 시 알림을 받습니다.

👉 더 알아보기: [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ 성능 튜닝 치트 시트

| 매개변수                 | 권장 값                                    | 영향도 | 근거                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | 파트 크기를 키우면 R2에서 Class-A 작업 수가 줄고 속도가 향상됩니다[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | R2에 대한 멀티파트 스레드 수를 늘립니다.                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | 병렬 객체 업로드가 10 Gbit 링크에서 처리량을 높입니다[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311). |
| `--s3-disable-checksum`   | 외부에서 별도로 체크섬을 <br />검증할 때만 추가 | ****         | 파트별 해싱 병목을 건너뜁니다—주의해서 사용하세요[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).        |
## 📈 실제 튜닝 결과

클라우드 간 전송 성능을 극대화하기 위해, 아래와 같이 **Cloudflare R2 리모트** 설정을 세밀하게 조정했습니다.

:::caution 실험 결과일 뿐입니다

RcloneView는 Rclone을 위한 GUI 프런트엔드입니다. 여기서 소개하는 성능 튜닝 팁과 벤치마크는 커뮤니티 게시글([Cloudflare R2 멀티파트 업로드 속도를 극대화하는 방법](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311))에서 영감을 받은 실험적 테스트를 기반으로 하며, 여러분의 클라우드 환경, 리전, 네트워크 상태, 사용 사례에 따라 결과가 달라질 수 있습니다.

이 결과는 **보장된 수치가 아니며**, 참고용으로만 활용하시기 바랍니다.
:::

### 🔧 R2 리모트 설정 업데이트 방법

대상 R2 리모트의 설정을 변경하려면:

1. **Explorer** 창에서 Cloudflare R2 리모트 옆의 톱니바퀴 아이콘을 클릭하거나, **Remote Manager → Edit**로 이동합니다.
2. **`Options`** 탭에서 **`Show advanced options`**를 클릭합니다.
3. 다음 값을 설정합니다:
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. 변경 사항을 저장합니다.

`disable_checksum` 옵션 또한 전송 속도에 상당한 영향을 줄 수 있습니다. 다만 이번 테스트에서는 파일 전송 중 무결성 검사를 유지하기 위해 기본값(`false`)을 그대로 사용했습니다.
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 기준선: 기본 성능

**기본 설정**을 사용할 경우:

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

**AWS S3**에서 **Cloudflare R2**로 EC2에서 호스팅되는 Rclone을 통해 대용량 파일을 이동할 때 약 **114 MB/s**의 전송 속도를 확인했습니다.
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 튜닝 후: 4배 성능 향상

Cloudflare R2 리모트를 최적화된 설정으로 업데이트한 결과:

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

`disable_checksum = false`를 유지한 채로도 약 **440 MB/s**의 속도를 달성했으며, 이는 기본값 대비 **4배 향상**된 수치입니다.

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ 요약

클라우드 간 전송이 더 이상 노트북을 거쳐 느릿느릿 진행될 필요는 없습니다. 무거운 작업을 EC2의 외부 Rclone 데몬으로 오프로드함으로써, 회선 속도에 가까운 마이그레이션 속도를 얻고, AWS 송신 비용의 예상치 못한 부담을 피하며, RcloneView 안에서 완전히 시각적인 워크플로우를 유지할 수 있습니다. 자신 있게 다음 S3 ↔ R2 이전을 시작하고, 로컬 병목 현상에 작별을 고하세요.

---

## 🔗 관련 가이드

- **스토리지 설정**
	- [S3 호환 리모트 추가 방법](/howto/remote-storage-connection-settings/s3)
	- [AWS S3 Access 자격 증명 발급 방법](/howto/cloud-storage-setting/aws-account-info)
	- [Cloudflare R2 Access 자격 증명 발급 방법](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2 및 원격 Rclone**
	- [AWS EC2에서 Rclone 실행 방법](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **창 및 연결 관리**
	- [New Window로 다중 Rclone 연결 사용하기](/howto/rcloneview-advanced/multi-window)
	- [여러 RcloneView 창 관리하기](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **동기화 및 작업 제어**
	- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
	- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
	- [작업 실행 및 관리하기](/howto/rcloneview-basic/execute-manage-job)
	- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **비용 고려사항**
	- [AWS 요금 – 데이터 전송](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **성능 최적화**
	- [Cloudflare R2 멀티파트 업로드 속도를 극대화하는 방법](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
