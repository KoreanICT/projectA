import React from 'react';
import styles from './detail.module.css';

export type DetailTab = 'overview' | 'video';

interface DetailSidebarProps {
    currentTab: DetailTab;
    onTabChange: (tab: DetailTab) => void;
}

export const Detail_Sidebar: React.FC<DetailSidebarProps> = ({ currentTab, onTabChange }) => {
    return (
        <aside className={styles.detail_sidebar_container}>
            <nav className={styles.detail_menu_box}>
                <button
                    className={`${styles.detail_menu_button} ${currentTab === 'overview' ? styles.active : ''}`}
                    onClick={() => onTabChange('overview')}
                >
                    개요
                </button>

                <div className={styles.detail_menu_divider} />

                <button
                    className={`${styles.detail_menu_button} ${currentTab === 'video' ? styles.active : ''}`}
                    onClick={() => onTabChange('video')}
                >
                    동영상 업로드 및 요약
                </button>
            </nav>
        </aside>
    );
};