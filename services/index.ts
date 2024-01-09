import news from './news';
import user from './user';
import users from './users';
import fileHandlers from './fileHandlers';

import noti from './noti';
import vehicles from './vehicles';
import drivers from './drivers';
import forwarder from './forwarder';
import customers from './customers';
import accountUsers from './accountUsers';
import orders from './orders';
import internal from './internal';
import deliveryOrders from './deliveryOrders';

import trainingTask from './trainingTask';
import documentations from './documentations';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const api = {
		news: news(config.public.baseUrl),
		user: user(config.public.baseUrl),
		users: users(config.public.baseUrl),
		fileHandlers: fileHandlers(config.public.baseUrl),

		noti: noti(config.public.baseUrl),
		vehicles: vehicles(config.public.baseUrl),
		drivers: drivers(config.public.baseUrl),
		forwarder: forwarder(config.public.baseUrl),
		customers: customers(config.public.baseUrl),
		accountUsers: accountUsers(config.public.baseUrl),
		orders: orders(config.public.baseUrl),
		internal: internal(config.public.baseUrl),
		deliveryOrders: deliveryOrders(config.public.baseUrl),

		// fake sv
		trainingTask: trainingTask(),
		documentations: documentations(),
	};
	return {
		provide: {
			api,
		},
	};
});
