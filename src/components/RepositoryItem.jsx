import Text from "./Text";
import { Image, StyleSheet, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  repoItem: {
    backgroundColor: "white",
    padding: 10,
  },
  repoTitle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5
  },
  repoInfoViews: {
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 30
  },
  description: {},
  languageTag: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 5,
  },
  repoStats: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  repoStat: {
    alignItems: "center"
  }
});

const Avatar = ({ uri }) => {
  return (
    <View>
      <Image source={{ uri }} style={styles.avatar} />
    </View>
  );
};

const LanguageTag = ({ language }) => {
  const languageStyles = [
    styles.languageTag,
    styles.repoInfoViews
  ];
  return (
    <View style={languageStyles}>
        <Text fontSize="subheading" color="darkBackground">
          {language}
        </Text>
    </View>
  );
};

const RepoNameView = ({ name }) => {
  return (
    <View style={styles.repoInfoViews}>
        <Text fontSize="subheading" fontWeight="bold">{name}</Text>
    </View>
  );
};

const RepoDescView = ({ description }) => {
  return (
    <View style={styles.repoInfoViews}>
        <Text fontSize="textSecondary">{description}</Text>
    </View>
  );
};

const RepositoryInfo = ({ name, description, language }) => {
  return (
    <View style={{flexShrink: 1}}>
      <RepoNameView name={name} />
      <RepoDescView description={description} />
      <LanguageTag language={language}/>
    </View>
  );
};

const RepositoryStat = ({ statName, statValue }) => {
  return (
    <View style={styles.repoStat}>
      <View>
        <Text fontWeight="bold">{statValue}</Text>
      </View>
      <View>
        <Text color="textSecondary">{statName}</Text>
      </View>
    </View>
  );
};

const RepositoryTitle = ({ name, uri, description, language }) => {
  return (
    <View style={styles.repoTitle}>
      <Avatar uri={uri} />
      <RepositoryInfo
        name={name}
        description={description}
        language={language}
      />
    </View>
  );
};

const RepositoryStats = ({ stars, forks, reviews, rating }) => {
  return (
    <View style={styles.repoStats}>
      <RepositoryStat statName="stars" statValue={stars}/>
      <RepositoryStat statName="forks" statValue={forks}/>
      <RepositoryStat statName="reviews" statValue={reviews}/>
      <RepositoryStat statName="rating" statValue={rating}/>
    </View>
  );
};

const RepositoryItem = ({ repo }) => {
  return (
    <View style={styles.repoItem}>
      <RepositoryTitle
        name={repo.fullName}
        uri={repo.ownerAvatarUrl}
        description={repo.description}
        language={repo.language}
      />
      <RepositoryStats
        stars={repo.stargazersCount}
        forks={repo.forksCount}
        reviews={repo.reviewCount}
        rating={repo.ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
