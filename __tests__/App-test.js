/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
const tree = renderer.create(<App />).toJSON();
expect(tree).toMatchSnapshot();
});

describe('Fetching Data', () => {

  it('should fetch commmit details from github server', async () => {
  
    // expect.assertions(1);

    const wrapper  = shallow(<App/>);
    const instance = wrapper.instance();
    const mockResponse = [
      {
        "sha": "94cffedb74a5eedbaa2c852188981bbf29b3c49e",
        "node_id": "MDY6Q29tbWl0NDAzNDU1MjM2Ojk0Y2ZmZWRiNzRhNWVlZGJhYTJjODUyMTg4OTgxYmJmMjliM2M0OWU=",
        "commit": {
          "author": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T22:30:33Z"
          },
          "committer": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T22:30:33Z"
          },
          "message": "image error and refactor",
          "tree": {
            "sha": "e0140cb85049a0ed0dfa813f0f9d28bf328ccc66",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/trees/e0140cb85049a0ed0dfa813f0f9d28bf328ccc66"
          },
          "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/commits/94cffedb74a5eedbaa2c852188981bbf29b3c49e",
          "comment_count": 0,
          "verification": {
            "verified": false,
            "reason": "unsigned",
            "signature": null,
            "payload": null
          }
        },
        "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/94cffedb74a5eedbaa2c852188981bbf29b3c49e",
        "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/94cffedb74a5eedbaa2c852188981bbf29b3c49e",
        "comments_url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/94cffedb74a5eedbaa2c852188981bbf29b3c49e/comments",
        "author": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "committer": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "parents": [
          {
            "sha": "c9dce60c383c235fc8b16cea9de5e2088adb29a9",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/c9dce60c383c235fc8b16cea9de5e2088adb29a9",
            "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/c9dce60c383c235fc8b16cea9de5e2088adb29a9"
          }
        ]
      },
      {
        "sha": "c9dce60c383c235fc8b16cea9de5e2088adb29a9",
        "node_id": "MDY6Q29tbWl0NDAzNDU1MjM2OmM5ZGNlNjBjMzgzYzIzNWZjOGIxNmNlYTlkZTVlMjA4OGFkYjI5YTk=",
        "commit": {
          "author": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T22:20:42Z"
          },
          "committer": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T22:20:42Z"
          },
          "message": "ressp error handling",
          "tree": {
            "sha": "c0b939220f713dd99031c9d4cf57201255c862f3",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/trees/c0b939220f713dd99031c9d4cf57201255c862f3"
          },
          "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/commits/c9dce60c383c235fc8b16cea9de5e2088adb29a9",
          "comment_count": 0,
          "verification": {
            "verified": false,
            "reason": "unsigned",
            "signature": null,
            "payload": null
          }
        },
        "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/c9dce60c383c235fc8b16cea9de5e2088adb29a9",
        "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/c9dce60c383c235fc8b16cea9de5e2088adb29a9",
        "comments_url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/c9dce60c383c235fc8b16cea9de5e2088adb29a9/comments",
        "author": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "committer": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "parents": [
          {
            "sha": "7020a606b0c9db89cf633e15a05580993a71b99f",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/7020a606b0c9db89cf633e15a05580993a71b99f",
            "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/7020a606b0c9db89cf633e15a05580993a71b99f"
          }
        ]
      },
      {
        "sha": "7020a606b0c9db89cf633e15a05580993a71b99f",
        "node_id": "MDY6Q29tbWl0NDAzNDU1MjM2OjcwMjBhNjA2YjBjOWRiODljZjYzM2UxNWEwNTU4MDk5M2E3MWI5OWY=",
        "commit": {
          "author": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T21:04:02Z"
          },
          "committer": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T21:04:02Z"
          },
          "message": "removed duble quotes",
          "tree": {
            "sha": "504ca936c4545d47868aacff31c262e009cef4be",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/trees/504ca936c4545d47868aacff31c262e009cef4be"
          },
          "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/commits/7020a606b0c9db89cf633e15a05580993a71b99f",
          "comment_count": 0,
          "verification": {
            "verified": false,
            "reason": "unsigned",
            "signature": null,
            "payload": null
          }
        },
        "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/7020a606b0c9db89cf633e15a05580993a71b99f",
        "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/7020a606b0c9db89cf633e15a05580993a71b99f",
        "comments_url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/7020a606b0c9db89cf633e15a05580993a71b99f/comments",
        "author": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "committer": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "parents": [
          {
            "sha": "95a1a61d461b878d5fbb5593ffd71971c78b87e9",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/95a1a61d461b878d5fbb5593ffd71971c78b87e9",
            "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/95a1a61d461b878d5fbb5593ffd71971c78b87e9"
          }
        ]
      },
      {
        "sha": "95a1a61d461b878d5fbb5593ffd71971c78b87e9",
        "node_id": "MDY6Q29tbWl0NDAzNDU1MjM2Ojk1YTFhNjFkNDYxYjg3OGQ1ZmJiNTU5M2ZmZDcxOTcxYzc4Yjg3ZTk=",
        "commit": {
          "author": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T21:03:38Z"
          },
          "committer": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T21:03:38Z"
          },
          "message": "with flatlist, styles and fetch api call",
          "tree": {
            "sha": "56ff6cd3f8b4e13cff00638aa25eabb774d12fa5",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/trees/56ff6cd3f8b4e13cff00638aa25eabb774d12fa5"
          },
          "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/commits/95a1a61d461b878d5fbb5593ffd71971c78b87e9",
          "comment_count": 0,
          "verification": {
            "verified": false,
            "reason": "unsigned",
            "signature": null,
            "payload": null
          }
        },
        "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/95a1a61d461b878d5fbb5593ffd71971c78b87e9",
        "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/95a1a61d461b878d5fbb5593ffd71971c78b87e9",
        "comments_url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/95a1a61d461b878d5fbb5593ffd71971c78b87e9/comments",
        "author": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "committer": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "parents": [
          {
            "sha": "505eaadf983bd08f118b71a9e51bda43fd1ade2d",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/505eaadf983bd08f118b71a9e51bda43fd1ade2d",
            "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/505eaadf983bd08f118b71a9e51bda43fd1ade2d"
          }
        ]
      },
      {
        "sha": "505eaadf983bd08f118b71a9e51bda43fd1ade2d",
        "node_id": "MDY6Q29tbWl0NDAzNDU1MjM2OjUwNWVhYWRmOTgzYmQwOGYxMThiNzFhOWU1MWJkYTQzZmQxYWRlMmQ=",
        "commit": {
          "author": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T05:41:29Z"
          },
          "committer": {
            "name": "ksarunsasi@gmail.com",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T05:41:29Z"
          },
          "message": "initial commit",
          "tree": {
            "sha": "430a3673d6dd65a7c32644d85bce4069199d03c4",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/trees/430a3673d6dd65a7c32644d85bce4069199d03c4"
          },
          "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/commits/505eaadf983bd08f118b71a9e51bda43fd1ade2d",
          "comment_count": 0,
          "verification": {
            "verified": false,
            "reason": "unsigned",
            "signature": null,
            "payload": null
          }
        },
        "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/505eaadf983bd08f118b71a9e51bda43fd1ade2d",
        "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/505eaadf983bd08f118b71a9e51bda43fd1ade2d",
        "comments_url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/505eaadf983bd08f118b71a9e51bda43fd1ade2d/comments",
        "author": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "committer": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "parents": [
          {
            "sha": "eeb583e76168c930da0e3ba079ccce7802463fe0",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/eeb583e76168c930da0e3ba079ccce7802463fe0",
            "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/eeb583e76168c930da0e3ba079ccce7802463fe0"
          }
        ]
      },
      {
        "sha": "eeb583e76168c930da0e3ba079ccce7802463fe0",
        "node_id": "MDY6Q29tbWl0NDAzNDU1MjM2OmVlYjU4M2U3NjE2OGM5MzBkYTBlM2JhMDc5Y2NjZTc4MDI0NjNmZTA=",
        "commit": {
          "author": {
            "name": "ksarunsasi",
            "email": "ksarunsasi@gmail.com",
            "date": "2021-09-06T01:54:49Z"
          },
          "committer": {
            "name": "GitHub",
            "email": "noreply@github.com",
            "date": "2021-09-06T01:54:49Z"
          },
          "message": "Initial commit",
          "tree": {
            "sha": "732dcc8dda279c89c13c23e0ac81d1891891d4ac",
            "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/trees/732dcc8dda279c89c13c23e0ac81d1891891d4ac"
          },
          "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/git/commits/eeb583e76168c930da0e3ba079ccce7802463fe0",
          "comment_count": 0,
          "verification": {
            "verified": true,
            "reason": "valid",
            "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJhNXTpCRBK7hj4Ov3rIwAAXVcIADV5tpDPUMz8VjzqnHcscIFa\nQyYSyyxOcnXgb5sJ9SgXYGcY9hokdq2HPhhvUr5SI6wzfR6iFKBY5XDlqadw75mc\nX1l+VCYYuxEZTmodUcp/hTbS+vtgg/yrGet65QprAkwayHrmDV8rY3i934ERMq1K\n46MiKUxiFYdMDMtveWgIYx5AgEuLrTGwk8igDnthGrhoxn1bDnp1tOVNOACAuIez\nlC5gN0IJbUTSkpq9iVh+70PoVEjsSp9MGJXFr6Sf5d61T8h/XfmfLLWLyiT8BYBA\nSHgl36gKdJCxOGQpNIwimlgJujlPG3zjkxak2hDm7YeFrStMTS77v2IRVHPnfyE=\n=UuKh\n-----END PGP SIGNATURE-----\n",
            "payload": "tree 732dcc8dda279c89c13c23e0ac81d1891891d4ac\nauthor ksarunsasi <ksarunsasi@gmail.com> 1630893289 -0500\ncommitter GitHub <noreply@github.com> 1630893289 -0500\n\nInitial commit"
          }
        },
        "url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/eeb583e76168c930da0e3ba079ccce7802463fe0",
        "html_url": "https://github.com/ksarunsasi/GM_Case_Study/commit/eeb583e76168c930da0e3ba079ccce7802463fe0",
        "comments_url": "https://api.github.com/repos/ksarunsasi/GM_Case_Study/commits/eeb583e76168c930da0e3ba079ccce7802463fe0/comments",
        "author": {
          "login": "ksarunsasi",
          "id": 12606633,
          "node_id": "MDQ6VXNlcjEyNjA2NjMz",
          "avatar_url": "https://avatars.githubusercontent.com/u/12606633?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/ksarunsasi",
          "html_url": "https://github.com/ksarunsasi",
          "followers_url": "https://api.github.com/users/ksarunsasi/followers",
          "following_url": "https://api.github.com/users/ksarunsasi/following{/other_user}",
          "gists_url": "https://api.github.com/users/ksarunsasi/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/ksarunsasi/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/ksarunsasi/subscriptions",
          "organizations_url": "https://api.github.com/users/ksarunsasi/orgs",
          "repos_url": "https://api.github.com/users/ksarunsasi/repos",
          "events_url": "https://api.github.com/users/ksarunsasi/events{/privacy}",
          "received_events_url": "https://api.github.com/users/ksarunsasi/received_events",
          "type": "User",
          "site_admin": false
        },
        "committer": {
          "login": "web-flow",
          "id": 19864447,
          "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
          "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/web-flow",
          "html_url": "https://github.com/web-flow",
          "followers_url": "https://api.github.com/users/web-flow/followers",
          "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
          "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
          "organizations_url": "https://api.github.com/users/web-flow/orgs",
          "repos_url": "https://api.github.com/users/web-flow/repos",
          "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
          "received_events_url": "https://api.github.com/users/web-flow/received_events",
          "type": "User",
          "site_admin": false
        },
        "parents": [
    
        ]
      }
    ]

    fetchMock.get(mockResponse);
    const commitResp = await instance.fetchCommitsDetails("ksarunsasi","GM_Case_Study");
    expect(commitResp).toEqual(mockResponse);
  });

  it('should fetch commmit details empty from github server', async () => {
  
    // expect.assertions(1);

    const wrapper  = shallow(<App/>);
    const instance = wrapper.instance();

    const mockResponse = []

    fetchMock.get(mockResponse);
    const commitResp = await instance.fetchCommitsDetails("fake","fake_repo");
    expect(commitResp).toEqual(mockResponse);
    expect(wrapper.state('commitDetails')).toBe([]);
  });

  it('should fetch commmit details not found from github server', async () => {
  
    // expect.assertions(1);

    const wrapper  = shallow(<App/>);
    const instance = wrapper.instance();

    const mockResponse = {
      "message": "Not Found",
      "documentation_url": "https://docs.github.com/rest/reference/repos#list-commits"
    }

    fetchMock.get(mockResponse);
    const commitResp = await instance.fetchCommitsDetails("","");
    expect(commitResp).toEqual(mockResponse);
    expect(wrapper.state('commitDetails')).toBe(mockResponse);
  });
});
