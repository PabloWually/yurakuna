export const styles = {
  container: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: { xs: 2, sm: 4 },
    m: 0,
    overflow: "auto",
    width: { xs: "98vw", sm: "auto" },
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    mb: "20px",
    paddingLeft: "11px",
  },
  title: {
    mt: 2,
    color: "common.black",
  },
}
