"use client";

import { useState } from "react";

type ModalType = "privacy" | "email" | null;

export default function Footer() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <footer className="mt-16 border-t border-[color:var(--brand-blue-soft)] bg-[color:var(--brand-blue-soft)]">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-700">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <img
              src="/images/common/logo.png"
              alt="원가스"
              className="h-10 w-auto"
            />
            <address className="not-italic leading-6 text-neutral-600">
              <span className="mr-6 inline-block">주소 : 대전광역시 대덕구 신탄진로 115번안길24</span>
              <span className="mr-6 inline-block">사업자등록번호 : 783-51-00505</span>
              <br />
              <span className="mr-6 inline-block">회사 대표번호 : 042.624.4001</span>
              <span className="mr-6 inline-block">팩스번호 : 042.632.4001</span>
              <span className="inline-block">이메일 : onegas4200@naver.com</span>
            </address>
            <div className="text-xs text-neutral-500">
              COPYRIGHT ⓒ {new Date().getFullYear()} 원가스. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="flex gap-4 text-xs text-neutral-500">
            <button
              type="button"
              onClick={() => setOpenModal("privacy")}
              className="text-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue-dark)]"
            >
              개인정보처리방침
            </button>
            <button
              type="button"
              onClick={() => setOpenModal("email")}
              className="text-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue-dark)]"
            >
              이메일무단수집거부
            </button>
          </div>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 text-neutral-800 shadow-xl">
            <button
              type="button"
              onClick={() => setOpenModal(null)}
              className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-800"
              aria-label="닫기"
            >
              ✕
            </button>
            {openModal === "privacy" ? (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">개인정보처리방침</h2>
                <div className="space-y-3 text-sm leading-6 text-neutral-600">
                  <p>
                    원가스(이하 “회사”)는 개인정보보호법 등 관계 법령을 준수하며, 고객님의
                    개인정보를 중요하게 보호합니다.
                  </p>
                  <p>본 방침은 2026년 01월 06일부터 시행됩니다.</p>
                  <div>
                    <strong className="block text-neutral-800">1. 수집하는 개인정보 항목</strong>
                    <p>회사는 상담을 위해 아래 정보를 수집합니다.</p>
                    <p>- 수집항목: 이름, 연락처, 이메일, 문의내용</p>
                  </div>
                  <div>
                    <strong className="block text-neutral-800">2. 개인정보의 수집 및 이용목적</strong>
                    <p>문의 접수, 답변 및 상담 진행을 위해 이용합니다.</p>
                  </div>
                  <div>
                    <strong className="block text-neutral-800">3. 보유 및 이용기간</strong>
                    <p>
                      원칙적으로 목적 달성 후 지체 없이 파기합니다. 단, 관련 법령에 따라
                      일정 기간 보관할 수 있습니다.
                    </p>
                    <p>- 계약 또는 청약철회 등에 관한 기록: 3년</p>
                    <p>- 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
                    <p>- 소비자 불만 또는 분쟁처리에 관한 기록: 3년</p>
                  </div>
                  <div>
                    <strong className="block text-neutral-800">4. 파기절차 및 방법</strong>
                    <p>
                      목적 달성 후 별도 DB로 옮겨 보관기간 경과 시 파기합니다. 전자적
                      파일은 복구 불가능한 방법으로 삭제합니다.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-neutral-800">5. 개인정보 제공</strong>
                    <p>
                      회사는 원칙적으로 개인정보를 외부에 제공하지 않습니다. 다만,
                      법령에 따른 경우 또는 이용자 동의가 있는 경우에 한합니다.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-neutral-800">
                      6. 이용자 및 법정대리인의 권리
                    </strong>
                    <p>
                      이용자는 개인정보 조회, 수정, 삭제를 요청할 수 있으며 요청 시
                      지체 없이 조치합니다.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-neutral-800">7. 쿠키의 운영</strong>
                    <p>
                      회사는 서비스 개선을 위해 쿠키를 사용할 수 있으며, 브라우저 설정을
                      통해 저장을 거부할 수 있습니다.
                    </p>
                  </div>
                  <div>
                    <strong className="block text-neutral-800">8. 개인정보 문의</strong>
                    <p>이메일: onegas4200@naver.com</p>
                    <p>전화: 042.624.4001</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <h2 className="text-lg font-semibold">이메일무단수집거부</h2>
                <p className="text-sm leading-6 text-neutral-600">
                  본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의
                  기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
