CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY,
  "user_name" VARCHAR(80) UNIQUE NOT NULL,
  "user_password" VARCHAR(80) NOT NULL,
  "user_email" VARCHAR(255) UNIQUE NOT NULL,
  "user_display_name" VARCHAR(100),
  "user_about_text" VARCHAR(500),
  "user_is_member" BOOLEAN,
  "user_is_admin" BOOLEAN
);

CREATE TABLE "posts" (
  "post_id" INT NOT NULL,
  "user_id" INT,
  "post_title" VARCHAR(300),
  "post_text" TEXT,
  "post_date" DATE DEFAULT CURRENT_DATE,
  PRIMARY KEY ("post_id"),
  CONSTRAINT "FK_posts.user_id"
    FOREIGN KEY ("user_id")
      REFERENCES "users"("user_id")
);

CREATE TABLE "comments" (
  "comment_id" INT NOT NULL,
  "post_id" INT NOT NULL,
  "user_id" INT NOT NULL,
  "comment_text" TEXT NOT NULL,
  "comment_date" DATE DEFAULT CURRENT_DATE,
  PRIMARY KEY ("comment_id"),
  CONSTRAINT "FK_comments.post_id"
    FOREIGN KEY ("post_id")
      REFERENCES "posts"("post_id"),
  CONSTRAINT "FK_comments.user_id"
    FOREIGN KEY("user_id")
      REFERENCES "users"("user_id")
);

CREATE TABLE "bookmarks" (
  "bookmark_id" INT NOT NULL,
  "user_id" INT NOT NULL,
  "post_id" INT NOT NULL,
  PRIMARY KEY ("bookmark_id"),
  CONSTRAINT "FK_bookmarks.post_id"
    FOREIGN KEY ("post_id")
      REFERENCES "posts"("post_id"),
  CONSTRAINT "FK_bookmarks.user_id"
    FOREIGN KEY ("user_id")
      REFERENCES "users"("user_id")
);

-- INSERT INTO users (user_id, user_name, user_password, user_email, user_display_name, user_about_text, user_is_member, user_is_admin) VALUES (1, 'admin', 'password', 'admin@test.com', 'admin-user', 'write some text about you here', true, true);
-- INSERT INTO users (user_id, user_name, user_password, user_email, user_display_name, user_about_text, user_is_member, user_is_admin) VALUES (2, 'member', 'password', 'member@test.com', 'member user', 'write some text about you here', true, false);
-- INSERT INTO users (user_id, user_name, user_password, user_email, user_display_name, user_about_text, user_is_member, user_is_admin) VALUES (3, 'regular-user', 'password', 'regular@test.com', 'regular user', 'write some text about you here', false, false);
-- INSERT INTO posts (post_id, user_id, post_title, post_text, post_date) VALUES (1, 1, 'test title', 'lorem ipsum dolor sit amet', '2024-01-10');
-- INSERT INTO comments (comment_id, post_id, user_id, comment_text, comment_date) VALUES (1, 1, 3, 'that is fire!!!', '2024-01-11');

