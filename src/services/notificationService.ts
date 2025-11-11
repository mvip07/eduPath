import API from '@/lib/axios'
import { Notification, NotificationPayload } from '@/types'

export const notificationService = {
    async getAllNotifications(): Promise<Notification[]> {
        const res = await API.get('/api/notification/')
        return res.data.result
    },

    async getNotificationById(notification_id: string): Promise<NotificationPayload | undefined> {
        const res = await API.get(`api/notification/${notification_id}`)
        return res.data.result
    },

    async createNotification(data: NotificationPayload): Promise<number> {
        const res = await API.post('/api/notification/', data)
        return res.data.result
    },

    async updateNotification(notification_id: string, data: NotificationPayload): Promise<void> {
        await API.patch(`api/notification/${notification_id}`, data)
    },

    async deleteNotification(notification_id: string): Promise<void> {
        await API.delete(`api/notification/${notification_id}`)
    },

    async readNotificationUser(user_id: string, data: { notification_id: string }) {
        const res = await API.post(`api/notification/user/${user_id}`, data)
        return res.data.result
    },

    async getNotificationsByUser(user_id: string): Promise<{
        not_read_count: number
        notification_count: number
        notification_users: {
            created_at: string
            id: string
            is_read: boolean
            notification_id: string
            read_at: string
            user_id: string
        }[]
        notifications: Notification[]
    }> {
        const res = await API.get(`api/notification/user/${user_id}`)
        return res.data.result
    },

    async createNotificationUser(data: { notification_id: string; user_id: string }) {
        await API.post('/api/notification_user/', data)
    },
}
