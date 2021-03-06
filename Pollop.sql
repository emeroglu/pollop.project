DROP TABLE CategoryPollAnswer
DROP TABLE CategoryPollChoice
DROP TABLE CategoryPoll
DROP TABLE Category
DROP TABLE [Notification]
DROP TABLE Participant
DROP TABLE PrivatePollAnswer
DROP TABLE PrivatePollChoice
DROP TABLE PrivatePoll
DROP TABLE PollAnswer
DROP TABLE PollChoice
DROP TABLE Poll
DROP TABLE Friendship
DROP TABLE [User]
GO

CREATE TABLE [User]
(
	PK int primary key identity(1,1),
	ID varchar(50),
	Name varchar(150),
	Age varchar(50),
	Profile varchar(1500),
	ProfilePicture varchar(1500),
	Cover varchar(1500),
	Email varchar(250),
	Gender varchar(25),
	Devices varchar(1500),
	DateSignedUp datetime,
	LastSeen datetime
)
GO

CREATE TABLE Friendship
(
	PK int primary key identity(1,1),
	UserFK int foreign key references [User](PK),
	FriendFK int foreign key references [User](PK)
)
GO

CREATE TABLE Poll
(
	PK int primary key identity(1,1),
	UserFK int foreign key references [User](PK),
	Question varchar(2500),
	Attendance int,
	StartDate datetime,
	EndDate datetime,
	State int
)
GO

CREATE TABLE PollChoice
(
	PK int primary key identity(1,1),
	PollFK int foreign key references Poll(PK),
	Text varchar(1250)
)
GO

CREATE TABLE PollAnswer
(
	PK int primary key identity(1,1),
	PollFK int foreign key references Poll(PK),
	PollChoiceFK int foreign key references PollChoice(PK),
	UserFK int foreign key references [User](PK),
	AnswerDate datetime
)
GO

CREATE TABLE PrivatePoll
(
	PK int primary key identity(1,1),
	UserFK int foreign key references [User](PK),	
	Question varchar(2500),
	Attendance int,
	StartDate datetime,
	EndDate datetime,
	State int
)
GO

CREATE TABLE PrivatePollChoice
(
	PK int primary key identity(1,1),
	PrivatePollFK int foreign key references PrivatePoll(PK),
	Text varchar(1250)
)
GO

CREATE TABLE PrivatePollAnswer
(
	PK int primary key identity(1,1),
	PrivatePollFK int foreign key references PrivatePoll(PK),
	PrivatePollChoiceFK int foreign key references PrivatePollChoice(PK),
	UserFK int foreign key references [User](PK),
	AnswerDate datetime
)
GO

CREATE TABLE Participant
(
	PK int primary key identity(1,1),
	PrivatePollFK int foreign key references PrivatePoll(PK),
	UserFK int foreign key references [User](PK)
)
GO

CREATE TABLE [Notification]
(
	PK int primary key identity(1,1),
	UserFK int foreign key references [User](PK),
	Text varchar(1500),
	State int
)
GO

CREATE TABLE Category
(
	PK int primary key identity(1,1),
	Name varchar(250)
)
GO

CREATE TABLE CategoryPoll
(
	PK int primary key identity(1,1),	
	CategoryFK int foreign key references Category(PK),
	Attendance int,
	Question varchar(2500),	
	StartDate datetime,
	EndDate datetime,
	State int
)
GO

CREATE TABLE CategoryPollChoice
(
	PK int primary key identity(1,1),
	CategoryPollFK int foreign key references CategoryPoll(PK),
	Text varchar(1250)
)
GO

CREATE TABLE CategoryPollAnswer
(
	PK int primary key identity(1,1),
	CategoryPollFK int foreign key references CategoryPoll(PK),
	CategoryPollChoiceFK int foreign key references CategoryPollChoice(PK),
	UserFK int foreign key references [User](PK),
	AnswerDate datetime
)
GO

---------------------

