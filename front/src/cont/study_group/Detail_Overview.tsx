import React from 'react';
import styles from './detail.module.css';

export const Detail_Overview: React.FC = () => {
    return (
        <div className={styles.detail_content_wrapper}>
            {/* 그룹 상단 헤더 프로필 영역 */}
            <div className={styles.group_header_card}>
                <div className={styles.group_icon}>물</div>
                <div className={styles.group_header_info}>
                    <h1 className={styles.group_title}>프론트엔드 CSS 지식 면접 대비반</h1>
                    <p className={styles.group_desc}>면접 대비 CSS 공부</p>
                </div>
            </div>

            {/* 그룹 공부시간 요약 영역 */}
            <div className={styles.detail_section_card}>
                <h3 className={styles.section_title}>그룹 공부시간</h3>
                <div className={styles.empty_state}>
                    <span className={styles.clock_icon}>⏰</span>
                    <p>아직 공부 기록이 없습니다.</p>
                    <p className={styles.sub_text}>그룹 스터디룸에서 공부를 시작해보세요!</p>
                </div>
            </div>

            {/* 최근 공지 영역 */}
            <div className={styles.detail_section_card}>
                <h3 className={styles.section_title}>최근 공지</h3>
                <p className={styles.empty_notice}>공지사항이 없습니다.</p>
            </div>
        </div>
    );
};