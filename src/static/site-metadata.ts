interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: '',
  logo: 'https://avatars.githubusercontent.com/u/8546109?v=4',
  description: 'Personal site and blog',
  navLinks: [],
};

export default data;
