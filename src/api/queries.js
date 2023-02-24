// Media Query for media from strapi library
export const MediaQuery = `
query UploadFile($uploadFileId: ID) {
  uploadFile(id: $uploadFileId) {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
}`;

// Queries for Blog Posts

export const PostQuery = `
query Posts {
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

export const PostBySlugQuery = `
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

// Queries for In The News

export const NewsQuery = `
query News {
  inTheNewspapers {
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
      }
    }
  }
}`;

export const NewsBySlugQuery = `
query GetNewsBySlug($filters: InTheNewspaperFiltersInput) {
  inTheNewspapers(filters: $filters) {
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
      }
    }
  }
}`;

// Queries for Navbar component
export const NavItemQuery = `
query RenderNavigation($navigationIdOrSlug: String!) {
  renderNavigation(navigationIdOrSlug: $navigationIdOrSlug, type: TREE) {
    title
    path
    items {
      title
      path
    }
  }
}`;

// queries for the team page
export const StaffByIdQuery = `
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
export const StaffQuery = `
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

// queries for the practice areas page
export const PracticeAreaPageQuery = `
query PracticeAreas($filters: PracticeAreaFiltersInput) {
  practiceAreas(filters: $filters) {
    data {
      attributes {
        heroText
        firstHeading
        firstContent
        secondHeading
        flipCard {
          id
          number
          title
          excerpt
          content
          image {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
        heroImage {
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
}
`;
