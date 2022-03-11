export type UserModel = {
	PID: string;
	FullName: string;
	Picture: string;
	platform: string;
	RecentMsg: MessageModel;
};

export enum eRequestStatus {
	REQUESTING = 'Requesting',
	SUCCESS = 'Success',
	FAILED = 'Failed',
}

export type MessageModel = {
	mid: string;
	text: string;
	reply_to: string;
	sender: string;
	recipient: string;
	time: number;
	isRead: boolean;
	isSended: boolean;
	isPageMessage: boolean;
	sendedStatus?: eRequestStatus;
};

export type SendMessageModel = {
	messaging_type: string;
	recipient: Recipient;
	message: Message;
};

export type Recipient = {
	id: string;
};

export type Message = {
	mid?: string;
	text: string;
	quick_reply?: QuickReply;
	reply_to?: ReplyTo;
};

export type QuickReply = {
	payload: string;
};

export type ReplyTo = {
	reply_to: string;
};

export enum eMessageType {
	UPDATE = 'UPDATE',
	RESPONSE = 'RESPONSE',
	MESSAGE_TAG = 'MESSAGE_TAG',
}

export enum ePlatform {
	Facebook = 'Facebook',
	Zalo = 'Zalo',
}

export type fbMsgApiResponse = {
	recipient_id: string;
	message_id: string;
};

export type CurrentChat = {
	PID: string;
	FullName: string;
	ProfilePicture?: string;
	Platform: string;
};
