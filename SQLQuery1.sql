INSERT INTO [User] VALUES ('123456789','Erhan Emre Eroðlu','{"min":21}','https://www.facebook.com/app_scoped_user_id/10153628636685996/','https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p50x50/10338221_10152576853520996_5185319332419852678_n.jpg?oh=46c77608b3d3f9fa63754e9a25f33b47&oe=565F4CBE&__gda__=1452558595_eeb5dc1da0f7263752c4676f488875e0','https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/s720x720/10930119_10153432433310996_3510056700173644473_n.jpg?oh=241b662a4b99871c07133c22097e62f1&oe=569FCA54&__gda__=1453515759_d1f08f8b1a16162122a5419b0383e6d5','emeroglu@ku.edu.tr','male','{"os":"Android"}',GETDATE(),GETDATE())
INSERT INTO [User] VALUES ('987654321','Kaan Ýlkyaz','{"min":21}','https://www.facebook.com/app_scoped_user_id/10153587882553535/','https://scontent.xx.fbcdn.net/hprofile-xlp1/v/l/t1.0-1/p50x50/11540901_10153441484688535_6126204076365582999_n.jpg?oh=5a791a2c0fe2a31e5433137549e447c4&oe=56A80CE1','https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/971856_10151629027508535_127666449_n.jpg?oh=332e09a53d952d41127faeea6795ca37&oe=56A3B1AD','kaan_susturucu666@hotmail.com','male','{"os":"Android"}',GETDATE(),GETDATE())
INSERT INTO [User] VALUES ('789456123','Musa Sönmez','{"min":21}','https://www.facebook.com/app_scoped_user_id/10153648652342229/','https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xtp1/v/t1.0-1/p50x50/10471269_10152855629422229_1232945715976050597_n.jpg?oh=a991eaa0ea6d3beb2cfd05498dd95e3b&oe=5670026C&__gda__=1449136544_4bffab4b0b602094209c7de69a24eafa','https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xta1/t31.0-8/s720x720/10629376_10152855624432229_6390561341145994609_o.jpg','sonmez_musa_02@hotmail.com','male','{"os":"Android"}',GETDATE(),GETDATE())
INSERT INTO [User] VALUES ('456789123','Kaan Telciler','{"min":21}','https://www.facebook.com/app_scoped_user_id/10153191500857582/','https://scontent.xx.fbcdn.net/hprofile-xat1/v/t1.0-1/p50x50/11225278_10152997309892582_5347608297812791019_n.jpg?oh=cf6c88ba5426a530b202586235e993d4&oe=569FF27C','','ktelciler2@hotmail.com','male','{"os":"Android"}',GETDATE(),GETDATE())

INSERT INTO Friendship VALUES (1,2)
INSERT INTO Friendship VALUES (2,1)

INSERT INTO Friendship VALUES (1,3)
INSERT INTO Friendship VALUES (3,1)

INSERT INTO Friendship VALUES (1,5)
INSERT INTO Friendship VALUES (5,1)

INSERT INTO Friendship VALUES (2,3)
INSERT INTO Friendship VALUES (3,2)

INSERT INTO Friendship VALUES (2,5)
INSERT INTO Friendship VALUES (5,2)

INSERT INTO Friendship VALUES (3,5)
INSERT INTO Friendship VALUES (5,3)

INSERT INTO PrivatePoll VALUES (2,'Nasýlsýnýz gençler?',0,GETDATE(),GETDATE() + 1,1)

INSERT INTO PrivatePollChoice VALUES (1,'Ýyiyiz')
INSERT INTO PrivatePollChoice VALUES (1,'Sanane')

INSERT INTO Participant VALUES (1,1)
INSERT INTO Participant VALUES (1,3)
INSERT INTO Participant VALUES (1,4)

INSERT INTO Poll VALUES (1,'Bi soru da benden',5,GETDATE(),GETDATE() + 10,1)

INSERT INTO PollChoice VALUES (5,'Þýk budur')
INSERT INTO PollChoice VALUES (5,'Ýkinci budur')
INSERT INTO PollChoice VALUES (5,'Üçüncü budur')

INSERT INTO Poll VALUES (2,'Soru budur',5,GETDATE(),GETDATE() + 10,1)

INSERT INTO PollChoice VALUES (1,'Þýk budur')
INSERT INTO PollChoice VALUES (1,'Ýkinci budur')
INSERT INTO PollChoice VALUES (1,'Üçüncü budur')

INSERT INTO Poll VALUES (2,'Bu da sorudur',5,GETDATE(),GETDATE() + 10,1)

INSERT INTO PollChoice VALUES (2,'En güzel þýk budur')
INSERT INTO PollChoice VALUES (2,'Ýkinci budur')
INSERT INTO PollChoice VALUES (2,'Berbat þýk budur')

INSERT INTO Poll VALUES (3,'Ne güzel soru',5,GETDATE(),GETDATE() + 10,1)

INSERT INTO PollChoice VALUES (3,'Çok iyi þýk')
INSERT INTO PollChoice VALUES (3,'Daha güzel þýk')

INSERT INTO Poll VALUES (4,'Çok acayip soru',5,GETDATE(),GETDATE() + 10,1)

INSERT INTO PollChoice VALUES (4,'Acayip þýk')
INSERT INTO PollChoice VALUES (4,'Nasýl bir þýk bu')

INSERT INTO Notification VALUES (1,'Musa Sönmez ile arkadaþ oldun...',1)
INSERT INTO Notification VALUES (1,'Kaan Telciler ile arkadaþ oldun...',1)
INSERT INTO Notification VALUES (1,'Kaan Ýlkyaz ile arkadaþ oldun...',1)

SELECT * FROM Poll
SELECT * FROM PollChoice
SELECT * FROM PollAnswer

SELECT * FROM PrivatePoll
SELECT * FROM PrivatePollChoice
SELECT * FROM PrivatePollAnswer

SELECT * FROM [User]