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

export const StaffBySlugQuery = `
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

// queries for the practice areas page

export const PracticeSlugQuery = `
query PracticeSlugQuery {
  practiceAreas {
    data {
      attributes {
        slug
      }
    }
  }
}
`;

export const PracticeBySlugQuery = `
query PracticeBySlugQuery($filters: PracticeAreaFiltersInput) {
  practiceAreas(filters: $filters) {
    data {
      attributes {
        slug
        pageTitle
        heroText
        heroImage {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        sections {
          ... on ComponentComponentsSection {
            heading
            content
            id
          }
        }
        special {
          ... on ComponentMoleculesSectionHeading {
            id
            heading
          }
        }
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
      }
    }
  }
}
`;

// home page queries

export const HomePageQuery = `
query HomePage {
  homePage {
    data {
      attributes {
        title
        heroImage {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
        button {
          link {
            href
            label
            id
          }
        }
        staffSection {
          id
          info
          button {
            label
            href
          }
          avatar {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          socialIcons {
            id
            href
            icon
          }
        }
      }
    }
  }
}

`;
