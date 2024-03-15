function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "static.oracle.com") ||
      shExpMatch(host, "signon-int.oracle.com") ||
      shExpMatch(host, "mysites.oracle.com") ||
      shExpMatch(host, "myosearch.oracle.com") ||
      shExpMatch(host, "people.oracle.com") ||
      shExpMatch(host, "docs.oracle.com") ||
      shExpMatch(host, "oradocs.oracle.com") ||
      shExpMatch(host, "oradocs-prodapp.cec.ocp.oraclecloud.com") ||
      shExpMatch(host, "apexapps.oracle.com") ||
      shExpMatch(host, "static.ocecdn.oraclecloud.com") ||
      shExpMatch(host, "app.internalcomms.oracle.com") ||
      shExpMatch(host, "app.oracomms.oracle.com"))
    return "DIRECT";

  if (shExpMatch(host, "*.oracle.com") ||
      shExpMatch(host, "*.oraclecloud.com") ||
      shExpMatch(host, "*.oraclecorp.com") ||
      shExpMatch(host, "*.oracleiaas.com") ||
      shExpMatch(host, "*.oraclevcn.com"))
    return "SOCKS5 127.0.0.1:20090";

  return "DIRECT";
}
