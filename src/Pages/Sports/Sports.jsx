<Helmet>
          <title>{`Profile - ${user?.fullName}`}</title>
          <meta name="description" content={user?.bio} />
          <meta
            name="keywords"
            content={`zookachu, zookachu profile, ${user?.username}, ${
              user?.fullName
            }, ${
              user?.links || "zookachu viral"
            },zookachu user, zookacu, social media app except big app,social media platform except big platform`}
          />
          <meta
            name="subject"
            content="Social media platform that have seemless user experience"
          />
          <meta name="copyright" content="spam" />
          <meta name="language" content="ES" />
          <meta
            name="author"
            content="Rumman Sheikh, rummansheikh2004@gmail.com"
          />
          <meta name="category" content="social" />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="rating" content="General" />
          <meta name="target" content="all" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={`Profile - ${user?.fullName}`} />
          <meta
            property="og:description"
            content={user?.bio || "Check out this profile on Zookachu!"}
          />
          <meta property="og:type" content="profile" />
          <meta
            property="og:url"
            content={`https://zookachu.com/profile/${user?.username}`}
          />
          <meta
            property="og:image"
            content={user?.profileImg || "/avatar-placeholder.png"}
          />
          <meta property="og:site_name" content="Zookachu" />
          <meta
            property="profile:first_name"
            content={user?.fullName?.split(" ")[0]}
          />
          <meta
            property="profile:last_name"
            content={user?.fullName?.split(" ")[1] || ""}
          />
          <meta property="profile:username" content={user?.username} />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`Profile - ${user?.fullName}`} />
          <meta
            name="twitter:description"
            content={user?.bio || "Check out this profile on Zookachu!"}
          />
          <meta
            name="twitter:image"
            content={user?.profileImg || "/avatar-placeholder.png"}
          />
          <meta name="twitter:site" content="@zookachu" />
        </Helmet>