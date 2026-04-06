async function getUserById(userId: string) {}
async function getOrdersByUserId(userId: string) {}
async function getNotificationsByUserId(userId: string) {}

async function getDashboardData(userId: string) {
    const [user, orders, notifications ] = await Promise.allSettled([
        getUserById(userId),
        getOrdersByUserId(userId),
        getNotificationsByUserId(userId)
    ])

    if (user.status === 'rejected') {
        logger.error({ err: user.reason }, 'Failed to fetch user');
    }
    if (orders.status === 'rejected') {
        logger.error({ err: orders.reason }, 'Failed to fetch orders');
    }
    if (notifications.status === 'rejected') {
        logger.error({ err: notifications.reason }, 'Failed to fetch notifications');
    }
  
    return {
        user: user.status === 'fulfilled' ? user.value : null,
        orders: orders.status === 'fulfilled' ? orders.value : null,
        notifications: notifications.status === 'fulfilled' ? notifications.value : null
    };
}