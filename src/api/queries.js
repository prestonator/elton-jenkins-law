// Queries for Blog Posts

export const AllPostData = `
query BlogPosts {
  blogPosts {
    data {
      id
      attributes {
        title
        content
        datePublished
        excerpt
        slug
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        author {
          data {
            attributes {
              name
              bio
              avatar {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
        categories {
          data {
            attributes {
              category
            }
          }
        }
      }
    }
  }
}`;

export const PostFilterBySlug = `
query GetBlogPostSlug($filters: BlogPostFiltersInput) {
    blogPosts(filters: $filters) {
      data {
        attributes {
          title
          content
          slug
          datePublished
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          author {
            data {
              attributes {
                name
                bio
                avatar {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
          categories {
            data {
              attributes {
                category
              }
            }
          }
        }
      }
    }
  }
`;

// Queries for Navbar component

export const LeftNavItems = `
query leftNav {
  renderNavigation(
    navigationIdOrSlug: "left-navigation"
    type: TREE
    menuOnly: false
  ) {
    id
    title
    path
    items {
      title
      path
    }
  }
}`;

export const RightNavItems = `
query RightNav {
  renderNavigation(
    navigationIdOrSlug: "right-navigation"
    type: TREE
    menuOnly: false
  ) {
    id
    title
    path
    items {
      title
      path
    }
  }
}`;

export const MediaQuery = `
query LogoQuery($uploadFileId: ID) {
  uploadFile(id: $uploadFileId) {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
}`;

// queries for the team page

export const TeamMemberById = `
query Query($filters: AuthorFiltersInput) {
  authors(filters: $filters) {
    data {
      attributes {
        slug
        name
        position
        phone
        email
        bio
        shortBio
        longBio
        location
        headshot {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        tabContainer {
          tabOne
          tabOneContent
          tabTwo
          tabTwoContent
          tabThree
          tabThreeContent
          tabFour
          tabFourContent
        }
      }
    }
  }
}
`;

export const TeamMemberData = `
query Authors {
  authors {
    data {
      attributes {
        slug
        name
        position
        phone
        email
        bio
        shortBio
        longBio
        location
        headshot {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        tabContainer {
          tabOne
          tabOneContent
          tabTwo
          tabTwoContent
          tabThree
          tabThreeContent
          tabFour
          tabFourContent
        }
      }
    }
  }
}`;
