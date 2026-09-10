
"use client";

import { Bell, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "Booking confirmed",
    message: "Your booking for Summer Music Festival 2026 is confirmed.",
    time: "10 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Payment successful",
    message: "Your payment of $50 has been successfully processed.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Event reminder",
    message: "Summer Music Festival 2026 is coming up on Sep 20.",
    time: "Yesterday",
    read: true,
  },
];

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>(
    initialNotifications
  );

  const [isOpen, setIsOpen] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = (id: number) => {
    setNotifications((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  return (
    <div className="relative" ref={notificationRef}>
      {/* Notification Button */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        aria-label="Notifications"
        aria-expanded={isOpen}
      >
        <Bell size={19} />

        {unreadCount > 0 && (
          <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Notifications
              </h3>

              <p className="mt-0.5 text-xs text-gray-500">
                {unreadCount > 0
                  ? `${unreadCount} unread notification${
                      unreadCount > 1 ? "s" : ""
                    }`
                  : "You're all caught up"}
              </p>
            </div>

            {unreadCount > 0 && (
              <button
                type="button"
                onClick={handleMarkAllAsRead}
                className="text-xs font-medium text-violet-600 hover:text-violet-700"
              >
                Mark all as read
              </button>
            )}
          </div>

          {/* Notification List */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-5 py-10 text-center">
                <Bell className="mx-auto h-8 w-8 text-gray-300" />

                <p className="mt-3 text-sm font-medium text-gray-700">
                  No notifications
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  You're all caught up.
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <button
                  key={notification.id}
                  type="button"
                  onClick={() => handleNotificationClick(notification.id)}
                  className={`flex w-full gap-3 border-b border-gray-100 px-4 py-4 text-left transition-colors hover:bg-gray-50 ${
                    !notification.read ? "bg-violet-50/50" : ""
                  }`}
                >
                  {/* Icon */}
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    {notification.title === "Booking confirmed" ? (
                      <Check size={16} />
                    ) : (
                      <Bell size={16} />
                    )}
                  </span>

                  {/* Content */}
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">
                        {notification.title}
                      </span>

                      {!notification.read && (
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-600" />
                      )}
                    </span>

                    <span className="mt-1 block text-xs leading-5 text-gray-500">
                      {notification.message}
                    </span>

                    <span className="mt-1.5 block text-[11px] text-gray-400">
                      {notification.time}
                    </span>
                  </span>
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 px-4 py-3">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs font-medium text-violet-600 hover:text-violet-700"
            >
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
